import {
    APPARITION_OPTIONS,
    APPARITIONS,
    APPARITIONS_SPELLCASTING,
    FIRST,
    FOCUS_ENTRY,
    FOURTH,
    LEVEL_SLOT,
    LORE_SKILL,
    moduleName, OVERRIDE_EFFECT,
    SECOND,
    SPELLCASTING_ENTRY,
    THIRD,
    UUID_APPARITIONS,
    VESSEL_FOCUS
} from "./const.js";

async function applyChanges(actor) {
    let {entry, focus} = await getSpellEntries(actor)
    await deleteLoreSpells(actor, entry, focus)

    let lores = await createLores(actor)

    await createSpells(entry, lores)
    let rollOptions = actor.getRollOptions();
    await createFocus(focus, actor.level >= 9 && rollOptions.includes("feature:medium"), rollOptions)
}

function currentSpellEntries(actor) {
    let featName = actor.items.find(i => i.sourceId === "Compendium.pf2e.classfeatures.Item.AHMjKkIx21AoMc9W")?.name

    let entry = actor.itemTypes.spellcastingEntry
        .find(s => s.name === "Apparition Attunement" || s.name === featName);
    let focus = actor.itemTypes.spellcastingEntry
        .find(s => s.name === "Vessel Spells" || s.name === game.i18n.localize("pf2e-dailies.animist.spellcasting.focus"));

    return {entry, focus}
}

async function getSpellEntries(actor) {
    let {entry, focus} = currentSpellEntries(actor)
    if (!entry) {
        let spellE = foundry.utils.deepClone(SPELLCASTING_ENTRY);

        Object.keys(spellE.system.slots).filter(k => k !== "slot0" && k !== "slot11")
            .forEach((element, index) => {
                spellE.system.slots[element].value = LEVEL_SLOT[actor.level - 1][index]
                spellE.system.slots[element].max = LEVEL_SLOT[actor.level - 1][index]
            })

        spellE._id = foundry.utils.randomID()
        spellE.flags[moduleName] = {
            generated: true
        }
        let featName = actor.items
            .find(i => i.sourceId === "Compendium.pf2e.classfeatures.Item.AHMjKkIx21AoMc9W")?.name
        if (featName) {
            spellE.name = featName
        }
        entry = (await actor.createEmbeddedDocuments("Item", [spellE]))[0];
    }

    if (!focus) {
        if (actor?.class?.slug === "animist") {
            let focusE = foundry.utils.deepClone(FOCUS_ENTRY);
            focusE._id = foundry.utils.randomID()
            focusE.flags[moduleName] = {
                generated: true
            }
            if (game.modules.get("pf2e-dailies")?.active) {
                focusE.name = game.i18n.localize("pf2e-dailies.animist.spellcasting.focus");
            }
            focus = (await actor.createEmbeddedDocuments("Item", [focusE]))[0];
        }
    }

    return {entry, focus}
}

async function deleteLoreSpells(actor, entry, focus) {
    let data = [
        ...actor.itemTypes.lore
            .filter(l => l?.flags?.[moduleName]?.generated)
            .map(i => i.id),
        ...actor.itemTypes.lore
            .filter(l => l?.flags?.["pf2e-dailies"]?.temporary)
            .map(i => i.id),
        ...actor.itemTypes.spell
            .filter(s => s.system?.location?.value === entry?.id && entry)
            .map(i => i.id),
        ...actor.itemTypes.spell
            .filter(s => focus && s.system?.location?.value === focus?.id)
            .map(i => i.id)
    ];
    await actor.deleteEmbeddedDocuments(
        "Item",
        data
    );
}

async function createLores(actor) {
    let lores = actor.getRollOptions()
        .filter(o => APPARITION_OPTIONS.some(a => o.startsWith(a)))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join("|")}`, "i"), ""))
        .map(r => APPARITIONS[r] || [])
        .flat()

    let items = lores.map(lore => {
        let newEffect = foundry.utils.deepClone(LORE_SKILL);
        newEffect._id = foundry.utils.randomID()
        newEffect.name = `${lore} Lore`
        newEffect.flags[moduleName] = {
            generated: true
        }
        if (actor.level >= 16) {
            newEffect.system.proficient.value = 3;
        } else if (actor.level >= 8) {
            newEffect.system.proficient.value = 2;
        }

        return newEffect
    })

    await actor.createEmbeddedDocuments("Item", items);

    ui.notifications.info(`Lores were changed for ${actor.name}`);

    return lores;
}

async function prepareSpell(uuid, spellEntry, withSignature = true) {
    let o = (await fromUuid(uuid)).toObject();
    o.system.location.value = spellEntry.id;
    if (game.settings.get(moduleName, "signatureSpell") && withSignature) {
        o.system.location.signature = true;
    }
    return o;
}

async function createSpells(spellEntry, lores) {
    let rollOptions = spellEntry.actor.getRollOptions();
    let maxRank = rollOptions?.includes("class:animist")
        ? Math.ceil(spellEntry.actor.level / 2)
        : 0;
    let apSpells = rollOptions
        .filter(o => APPARITION_OPTIONS.some(a => o.startsWith(a)))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join("|")}`, "i"), ""))
        .map(r => APPARITIONS_SPELLCASTING[r] || [])

    let allSpells = []
    for (const spells of apSpells) {
        for (let i = 0; i < spells.length; i++) {
            if (i > maxRank) {
                break
            }
            allSpells.push(await prepareSpell(spells[i], spellEntry, i !== 0));
        }
    }
    if (maxRank >= 10) {
        allSpells.push(await prepareSpell("Compendium.pf2e.spells-srd.Item.ckUOoqOM7Kg7VqxB", spellEntry, false));
    }
    if (rollOptions.includes("feat:embodiment-of-the-balance")) {
        allSpells.push(await prepareSpell("Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs", spellEntry));
        allSpells.push(await prepareSpell("Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz", spellEntry));
    }

    if (rollOptions.includes("feat:walk-the-wilds")) {
        allSpells.push(await prepareSpell("Compendium.pf2e.spells-srd.Item.wp09USMB3GIW1qbp", spellEntry));
    }

    if (rollOptions.includes("feat:wind-seeker")) {
        allSpells.push(await prepareSpell("Compendium.pf2e.spells-srd.Item.NzXpEzcZAjuDTZjK", spellEntry));
    }
    if (rollOptions.includes("feat:monstrous-inclinations") && (lores.includes("Forest") || lores.includes("Ocean"))) {
        allSpells.push(await prepareSpell("Compendium.pf2e.spells-srd.Item.8AMvNVOUEtxBCDvJ", spellEntry));
    }

    await spellEntry.actor.createEmbeddedDocuments("Item", allSpells);

    ui.notifications.info(`Spells were changed for ${spellEntry.actor.name}`);
}

async function createFocus(spellEntry, dualInvocation, rollOptions) {
    if (!spellEntry) {
        return;
    }
    let focus = spellEntry.actor.getRollOptions()
        .filter(o => o.startsWith("primary-apparition:"))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join("|")}`, "i"), ""))
        .map(r => VESSEL_FOCUS[r])
        .find(a => a)
    if (focus) {
        focus = (await fromUuid(focus)).toObject();
        focus.system.location.value = spellEntry.id;

        await spellEntry.actor.createEmbeddedDocuments("Item", [focus]);
    }

    if (dualInvocation) {
        let focus2 = spellEntry.actor.getRollOptions()
            .filter(o => o.startsWith("secondary-apparition:"))
            .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join("|")}`, "i"), ""))
            .map(r => VESSEL_FOCUS[r])
            .find(a => a)
        if (focus2) {
            focus2 = (await fromUuid(focus2)).toObject();
            focus2.system.location.value = spellEntry.id;

            await spellEntry.actor.createEmbeddedDocuments("Item", [focus2]);
        }
    }
    if (rollOptions.includes("feat:circle-of-spirits")) {
        let app = rollOptions
            .filter(o => APPARITION_OPTIONS.some(a => o.startsWith(a)))
            .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join("|")}`, "i"), ""))
            .filter(s => s !== "dispersed")
            .length;

        let spells = spellEntry.actor.itemTypes
            .spell.filter(s=>s?.system?.location?.value === spellEntry.id)
            .length;

        let effect = foundry.utils.deepClone(OVERRIDE_EFFECT);
        effect.value = Math.max(Math.max(app, spells), 1);

        spellEntry.update({"system.rules": [effect]});
    }
}

Hooks.on("pf2e.restForTheNight", async (actor) => {
    if (game.modules.get("pf2e-dailies")?.active) {
        return
    }
    if (!actor) {
        return
    }
    let r = actor.getRollOptions()
    if (!r.includes("class:animist") && !r.includes("feat:animist-dedication")) {
        return;
    }

    let {entry, focus} = currentSpellEntries(actor)
    await deleteLoreSpells(actor, entry, focus)
    if (entry) {
        await entry.delete()
    }
    if (focus) {
        await focus.delete()
    }

    let aa = actor.itemTypes.feat.find(s => s.slug === "apparition-attunement");
    let ta = actor.itemTypes.feat.find(s => s.slug === "third-apparition");
    let fa = actor.itemTypes.feat.find(s => s.slug === "fourth-apparition");
    if (aa) {
        actor.toggleRollOption("all", "primary-apparition", aa.id, true, "dispersed")
        actor.toggleRollOption("all", "secondary-apparition", aa.id, true, "dispersed")
    }
    if (ta) {
        actor.toggleRollOption("all", "third-apparition", ta.id, true, "dispersed")
    }
    if (fa) {
        actor.toggleRollOption("all", "fourth-apparition", fa.id, true, "dispersed")
    }
});

Hooks.on("renderCharacterSheetPF2e", (sheet, html) => {
    if (!sheet.object || !sheet.object.isOwner) {
        return
    }
    let r = sheet.object.getRollOptions()
    if (!r.includes("class:animist") && !r.includes("feat:animist-dedication")) {
        return;
    }
    let btn = $(`
        <a class="roll-icon" data-tooltip="Apply changes of Apparitions">
            <i class="fa-solid fa-ghost"></i>
        </a>
    `)
    btn.on("click", (e) => applyChanges(sheet.object));

    html.find("aside .sidebar .hp-small")
        .append(btn)
});

Hooks.once("init", () => {
    game.settings.register(moduleName, "signatureSpell", {
        name: "All Apparition spells are signature spells",
        hint: "",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
});

Hooks.once("setup", () => {
    game.modules.get(moduleName).macros = {
        applyChanges
    }
})

Hooks.on("preCreateItem", (item) => {
    if (item?.sourceId === "Compendium.pf2e.classfeatures.Item.AHMjKkIx21AoMc9W") {
        item.updateSource({
            "system.rules": [FIRST, SECOND, ...item.system.rules]
        })
    } else if (item?.sourceId === "Compendium.pf2e.classfeatures.Item.bRAjde9LlavcOUuM") {
        item.updateSource({
            "system.rules": [THIRD, ...item.system.rules]
        })
    } else if (item?.sourceId === "Compendium.pf2e.classfeatures.Item.avLo2Jl3mNWssp0W") {
        item.updateSource({
            "system.rules": [FOURTH, ...item.system.rules]
        })
    } else if (item?.sourceId === "Compendium.pf2e.feats-srd.Item.5hFFM5TmhKYSQwtG") {
        item.updateSource({
            "system.rules": [FIRST, ...item.system.rules]
        })
    }
})

Hooks.on("preUpdateActor", async (actor, data) => {
    if (!data?.flags?.["pf2e-dailies"]?.tooltip) {
        return
    }
    if (data?.flags?.["pf2e-dailies"]?.dailies?.animist || actor?.flags?.["pf2e-dailies"]?.dailies?.animist) {
        let first = data?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition1 || actor?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition1
        let second = data?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition2 || actor?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition2
        let third = data?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition3 || actor?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition3
        let fourth = data?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition4 || actor?.flags?.["pf2e-dailies"]?.dailies?.animist?.apparition4

        let aa = actor.itemTypes.feat.find(s => s.slug === "apparition-attunement");
        let ta = actor.itemTypes.feat.find(s => s.slug === "third-apparition");
        let fa = actor.itemTypes.feat.find(s => s.slug === "fourth-apparition");

        if (aa && UUID_APPARITIONS[first] && UUID_APPARITIONS[second]) {
            await actor.toggleRollOption("all", "primary-apparition", aa.id, true, UUID_APPARITIONS[first])
            await actor.toggleRollOption("all", "secondary-apparition", aa.id, true, UUID_APPARITIONS[second])
        }
        if (ta && UUID_APPARITIONS[third]) {
            await actor.toggleRollOption("all", "third-apparition", aa.id, true, UUID_APPARITIONS[third])
        }
        if (fa && UUID_APPARITIONS[fourth]) {
            await actor.toggleRollOption("all", "fourth-apparition", aa.id, true, UUID_APPARITIONS[fourth])
        }
    }
})
