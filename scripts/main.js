const moduleName = "pf2e-animist";

function isActiveGM() {
    return game.user === game.users.activeGM
}

const APPARITIONS = {
    "crafter-in-the-vault": ["Architecture", "Engineering"],
    'custodian-of-groves-and-gardens': ["Farming", "Herbalism"],
    "echo-of-lost-moments": ["Fortune-Telling", "Genealogy"],
    'impostor-in-hidden-places': ["Fortune-Telling", "Underworld"],
    'lurker-in-devouring-dark': ["Ocean", "Sailing"],
    "monarch-of-the-fey-courts": ["Art", "Fey"],
    'reveler-in-lost-glee': ["Circus", "Fortune-Telling"],
    'stalker-in-darkened-boughs': ["Forest", "Hunting"],
    'steward-of-stone-and-fire': ["Mountain", "Volcano"],
    'vanguard-of-roaring-waters': ["Mountain", "River"],
    'witness-to-ancient-battles': ["Battlegrounds", "Heraldry"],
}

const VESSEL_FOCUS = {
    "crafter-in-the-vault": "Compendium.pf2e.spells-srd.Item.rzcXUF5YmJYxgxEa",
    'custodian-of-groves-and-gardens': "Compendium.pf2e.spells-srd.Item.w4M6Vqvq8k6MOFvj",
    "echo-of-lost-moments": "Compendium.pf2e.spells-srd.Item.FZMVLL7HvasjiM6D",
    'impostor-in-hidden-places': "Compendium.pf2e.spells-srd.Item.t1e3U2eluRsp2izf",
    'lurker-in-devouring-dark': "Compendium.pf2e.spells-srd.Item.wTldMJx0vyBAehrI",
    "monarch-of-the-fey-courts": "Compendium.pf2e.spells-srd.Item.SAmyaiVKTDrUNjot",
    'reveler-in-lost-glee': "Compendium.pf2e.spells-srd.Item.cuKVbWWNzJj1GDpZ",
    'stalker-in-darkened-boughs': 'Compendium.pf2e.spells-srd.Item.BhJtCTLbngvZm8EA',
    'steward-of-stone-and-fire': "Compendium.pf2e.spells-srd.Item.PrlR2sLWeiuTcPF2",
    'vanguard-of-roaring-waters': "Compendium.pf2e.spells-srd.Item.ew4ToaTU3o8ahKio",
    'witness-to-ancient-battles': "Compendium.pf2e.spells-srd.Item.X4On99Nti8gjWywG",
}

const APPARITIONS_SPELLCASTING = {
    "crafter-in-the-vault": [
        "Compendium.pf2e.spells-srd.Item.AUctDF2fqPZN2w4W",
        "Compendium.pf2e.spells-srd.Item.dINQzhqGmIsqGMUY",
        "Compendium.pf2e.spells-srd.Item.6Ot4N22t5tPD51BO",
        "Compendium.pf2e.spells-srd.Item.AMEu5zzLN7uCX645",
        "Compendium.pf2e.spells-srd.Item.TUj8eugNqAvB1vVR",
        "Compendium.pf2e.spells-srd.Item.oXeEbcUdgJGWHGEJ",
        "Compendium.pf2e.spells-srd.Item.CB5TlGv5ZghtMifi",
        "Compendium.pf2e.spells-srd.Item.dKWc83KKiXoIJkhp",
        "Compendium.pf2e.spells-srd.Item.89Hj5QuqvcwVXcqj",
        "Compendium.pf2e.spells-srd.Item.KPDHmmjJiw7PhTYF",
    ],
    'custodian-of-groves-and-gardens': [
        "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
        "Compendium.pf2e.spells-srd.Item.K9gI08enGtmih5X1",
        "Compendium.pf2e.spells-srd.Item.C0D2eqzTAhiKm4j9",
        "Compendium.pf2e.spells-srd.Item.IFuEzfmmWyNwVbhY",
        "Compendium.pf2e.spells-srd.Item.onjZCEHs3JJJRTD0",
        "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
        "Compendium.pf2e.spells-srd.Item.x5rGOmhDRDVQPrnW",
        "Compendium.pf2e.spells-srd.Item.HES5jvGiNZZnJycK",
        "Compendium.pf2e.spells-srd.Item.4MOew29Z1oCX8O28",
        "Compendium.pf2e.spells-srd.Item.Tc5NLaMu71vrGTJQ",
    ],
    "echo-of-lost-moments": [
        "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "Compendium.pf2e.spells-srd.Item.rerNA6YZsdxuJYt3",
        "Compendium.pf2e.spells-srd.Item.9HpwDN4MYQJnW0LG",
        "Compendium.pf2e.spells-srd.Item.B3eLlbaPxOYHcs1o",
        "Compendium.pf2e.spells-srd.Item.Jmxru8zMdYMRuO5n",
        "Compendium.pf2e.spells-srd.Item.Ucf8eynbZMfUucjE",
        "Compendium.pf2e.spells-srd.Item.0XP2XOxT9VSiXFDr",
        "Compendium.pf2e.spells-srd.Item.rsZ5c0AUyywe5yoK",
        "Compendium.pf2e.spells-srd.Item.Oj1PJBMQD9vuwCv7",
        "Compendium.pf2e.spells-srd.Item.qsNeG9KZpODSACMq",
    ],
    'impostor-in-hidden-places': [
        "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
        "Compendium.pf2e.spells-srd.Item.6ZIKB0151LUR19Rw",
        "Compendium.pf2e.spells-srd.Item.XXqE1eY3w3z6xJCB",
        "Compendium.pf2e.spells-srd.Item.EoKBlgf6Smt8opaU",
        "Compendium.pf2e.spells-srd.Item.OM5NeD7a1CYNqy8S",
        "Compendium.pf2e.spells-srd.Item.m4Mc5XbdML92BKOE",
        "Compendium.pf2e.spells-srd.Item.WPXzPl7YbMEIGWfi",
        "Compendium.pf2e.spells-srd.Item.vPWMEyVTreMOoFnm",
        "Compendium.pf2e.spells-srd.Item.wfleiawxsfhpRRwf",
        "Compendium.pf2e.spells-srd.Item.MJx7DmjsWYzDZ3a4",
    ],
    'lurker-in-devouring-dark': [
        "Compendium.pf2e.spells-srd.Item.thAHF1zxNplLCJPO",
        "Compendium.pf2e.spells-srd.Item.k34hDOfIIMAxNL4a",
        "Compendium.pf2e.spells-srd.Item.9h9YCncqah6VNsKf",
        "Compendium.pf2e.spells-srd.Item.oUDNCArkQTdhllxD",
        "Compendium.pf2e.spells-srd.Item.rwWtpZpkNYvypknx",
        "Compendium.pf2e.spells-srd.Item.R5FHRv7VqyRnxg2t",
        "Compendium.pf2e.spells-srd.Item.R5r4vtmlvOA8hDiF",
        "Compendium.pf2e.spells-srd.Item.0EzLXIpPPH0LOKqt",
        "Compendium.pf2e.spells-srd.Item.C2GYCH3TtUFqPfdX",
        "Compendium.pf2e.spells-srd.Item.4WS7HrFjwNvTn8T2",
    ],
    "monarch-of-the-fey-courts": [
        "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
        "Compendium.pf2e.spells-srd.Item.vLA0q0WOK2YPuJs6",
        "Compendium.pf2e.spells-srd.Item.Mt6ZzkVX8Q4xigFq",
        "Compendium.pf2e.spells-srd.Item.IihxWhRfpsBgQ5jS",
        "Compendium.pf2e.spells-srd.Item.qwlh6aDgi86U3Q7H",
        "Compendium.pf2e.spells-srd.Item.U58aQWJ47VrI36yP",
        "Compendium.pf2e.spells-srd.Item.OsOhx3TGIZ7AhD0P",
        "Compendium.pf2e.spells-srd.Item.O6VQC1Bs4aSYDa6R",
        "Compendium.pf2e.spells-srd.Item.Jvyy6oVIQsD34MHB",
        "Compendium.pf2e.spells-srd.Item.FmNDwqMEjeTEGPrY",
    ],
    'reveler-in-lost-glee': [
        "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
        "Compendium.pf2e.spells-srd.Item.UKsIOWmMx4hSpafl",
        "Compendium.pf2e.spells-srd.Item.tlSE7Ly8vi1Dgddv",
        "Compendium.pf2e.spells-srd.Item.K2WpC3FFoHrqX9Q5",
        "Compendium.pf2e.spells-srd.Item.LiGbewa9pO0yjbsY",
        "Compendium.pf2e.spells-srd.Item.Ucf8eynbZMfUucjE",
        "Compendium.pf2e.spells-srd.Item.RQjSQVZRG497cJhX",
        "Compendium.pf2e.spells-srd.Item.8kJbiBEjMWG4VUjs",
        "Compendium.pf2e.spells-srd.Item.Oj1PJBMQD9vuwCv7",
        "Compendium.pf2e.spells-srd.Item.FEsuyf203wTNE2et",
    ],
    'stalker-in-darkened-boughs': [
        "Compendium.pf2e.spells-srd.Item.MPxbKoR54gkYkqLO",
        "Compendium.pf2e.spells-srd.Item.EE7Q5BHIrfWNCPtT",
        "Compendium.pf2e.spells-srd.Item.cB17yFc9456Pyfec",
        "Compendium.pf2e.spells-srd.Item.KsWhliKfUs3IpW3c",
        "Compendium.pf2e.spells-srd.Item.VuPDHoVEPLbMfCJC",
        "Compendium.pf2e.spells-srd.Item.YtesyvfAIwXOqISq",
        "Compendium.pf2e.spells-srd.Item.JbAcSLu62TU1OgNF",
        "Compendium.pf2e.spells-srd.Item.bVtkBJvGLP69qVGI",
        "Compendium.pf2e.spells-srd.Item.8AMvNVOUEtxBCDvJ",
        "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx",
    ],
    'steward-of-stone-and-fire': [
        "Compendium.pf2e.spells-srd.Item.6DfLZBl8wKIV03Iq",
        "Compendium.pf2e.spells-srd.Item.HokKyQl5g655xx9U",
        "Compendium.pf2e.spells-srd.Item.v89KwyaBd6g5rWVS",
        "Compendium.pf2e.spells-srd.Item.sxQZ6yqTn0czJxVd",
        "Compendium.pf2e.spells-srd.Item.IarZrgCeaiUqOuRu",
        "Compendium.pf2e.spells-srd.Item.kOa055FIrO9Smnya",
        "Compendium.pf2e.spells-srd.Item.znv4ECL7ZtuiagtA",
        "Compendium.pf2e.spells-srd.Item.O7ZEqWjwdKyo2CUv",
        "Compendium.pf2e.spells-srd.Item.x7SPrsRxGb2Vy2nu",
        "Compendium.pf2e.spells-srd.Item.jrBa9deU2ULFWvSl",
    ],
    'vanguard-of-roaring-waters': [
        "Compendium.pf2e.spells-srd.Item.zhDIiQlJmrd4UDNC",
        "Compendium.pf2e.spells-srd.Item.jfVCuOpzC6mUrf6f",
        "Compendium.pf2e.spells-srd.Item.9XHmC2JgTUIQ1CCm",
        "Compendium.pf2e.spells-srd.Item.T4QKmtYPeCgYxVGe",
        "Compendium.pf2e.spells-srd.Item.Y3G6Y6EDgCY0s3fq",
        "Compendium.pf2e.spells-srd.Item.zfn5RqAdF63neqpP",
        "Compendium.pf2e.spells-srd.Item.K2bTUhucPyhXlzjw",
        "Compendium.pf2e.spells-srd.Item.smiVuoFMSgY2FTOO",
        "Compendium.pf2e.spells-srd.Item.0fjz8qc9NfkmWmJZ",
        "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx",
    ],
    'witness-to-ancient-battles': [
        "Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR",
        "Compendium.pf2e.spells-srd.Item.Gb7SeieEvd0pL2Eh",
        "Compendium.pf2e.spells-srd.Item.wzctak6BxOW8xvFV",
        "Compendium.pf2e.spells-srd.Item.AMEu5zzLN7uCX645",
        "Compendium.pf2e.spells-srd.Item.8M03UxGXjYyDFAoy",
        "Compendium.pf2e.spells-srd.Item.hghGRzOSzEl4UXdS",
        "Compendium.pf2e.spells-srd.Item.0XP2XOxT9VSiXFDr",
        "Compendium.pf2e.spells-srd.Item.AlbpWWN87yGegoAF",
        "Compendium.pf2e.spells-srd.Item.qlxM7Ik3uUeUIOcv",
        "Compendium.pf2e.spells-srd.Item.ZqmP9gijBmK7y8Xy",
    ],
}

const LORE_SKILL = {
    "_id": "",
    img: "systems/pf2e/icons/default-icons/lore.svg",
    "name": "",
    "flags": {},
    "system": {
        "proficient": {"value": 1}
    },
    "type": "lore"
}

const SPELLCASTING_ENTRY = {
    "_id": "",
    "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
    "name": "Apparition Spells",
    "system": {
        "ability": {"value": "wis"},
        "spelldc": {"value": 0, "dc": 0},
        "tradition": {"value": "divine"},
        "prepared": {"value": "spontaneous"},
        "showSlotlessLevels": {"value": true},
        "proficiency": {"value": 1, "slug": ""},
        "slots": {
            "slot0": {"prepared": [], "value": 0, "max": 0},
            "slot1": {"prepared": [], "value": 1, "max": 1},
            "slot2": {"prepared": [], "value": 0, "max": 0},
            "slot3": {"prepared": [], "value": 0, "max": 0},
            "slot4": {"prepared": [], "value": 0, "max": 0},
            "slot5": {"prepared": [], "value": 0, "max": 0},
            "slot6": {"prepared": [], "value": 0, "max": 0},
            "slot7": {"prepared": [], "value": 0, "max": 0},
            "slot8": {"prepared": [], "value": 0, "max": 0},
            "slot9": {"prepared": [], "value": 0, "max": 0},
            "slot10": {"prepared": [], "value": 0, "max": 0},
            "slot11": {"prepared": [], "value": 0, "max": 0}
        },
        "autoHeightenLevel": {"value": null}
    },
    "type": "spellcastingEntry",
    "flags": {}
}

const FOCUS_ENTRY = {
    "_id": "",
    "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
    "name": "Vessel Spell",
    "system": {
        "ability": {"value": "wis"},
        "spelldc": {"value": 0, "dc": 0},
        "tradition": {"value": "divine"},
        "prepared": {"value": "focus"},
        "showSlotlessLevels": {"value": true},
        "proficiency": {"value": 1, "slug": ""},
        "slots": {
            "slot0": {"prepared": [], "value": 0, "max": 0},
            "slot1": {"prepared": [], "value": 0, "max": 0},
            "slot2": {"prepared": [], "value": 0, "max": 0},
            "slot3": {"prepared": [], "value": 0, "max": 0},
            "slot4": {"prepared": [], "value": 0, "max": 0},
            "slot5": {"prepared": [], "value": 0, "max": 0},
            "slot6": {"prepared": [], "value": 0, "max": 0},
            "slot7": {"prepared": [], "value": 0, "max": 0},
            "slot8": {"prepared": [], "value": 0, "max": 0},
            "slot9": {"prepared": [], "value": 0, "max": 0},
            "slot10": {"prepared": [], "value": 0, "max": 0},
            "slot11": {"prepared": [], "value": 0, "max": 0}
        },
        "autoHeightenLevel": {"value": null}
    },
    "type": "spellcastingEntry",
    "flags": {}
}

const APPARITION_OPTIONS = ['primary-apparition:', 'secondary-apparition:', 'third-apparition:', 'fourth-apparition:']

Hooks.on("updateItem", async (item, data, options, userId) => {
    if (
        !isActiveGM()
        || !item.actor
        || (item.name !== "Apparition Attunement"
            && item.name !== "Third Attunement"
            && item.name !== "Fourth Attunement"
        )
        || !data?.system?.rules
    ) {
        return
    }

    let entry = item.actor.itemTypes.spellcastingEntry.find(s => s.name === 'Apparition Spells');
    if (!entry) {
        let spellE = foundry.utils.deepClone(SPELLCASTING_ENTRY);
        spellE._id = foundry.utils.randomID()
        spellE.flags[moduleName] = {
            generated: true
        }

        entry = (await item.actor.createEmbeddedDocuments("Item", [spellE]))[0];
    }

    let focus = item.actor.itemTypes.spellcastingEntry.find(s => s.name === 'Vessel Spell');
    if (!focus) {
        let focusE = foundry.utils.deepClone(FOCUS_ENTRY);
        focusE._id = foundry.utils.randomID()
        focusE.flags[moduleName] = {
            generated: true
        }

        focus = (await item.actor.createEmbeddedDocuments("Item", [focusE]))[0];
    }

    await item.actor.deleteEmbeddedDocuments(
        "Item",
        item.actor.itemTypes.lore
            .filter(l => l?.flags?.[moduleName]?.generated)
            .map(i => i.id)
    );

    await item.actor.deleteEmbeddedDocuments(
        "Item",
        item.actor.itemTypes.spell
            .filter(s => s.system?.location?.value === entry?.id)
            .map(i => i.id)
    );

    await item.actor.deleteEmbeddedDocuments(
        "Item",
        item.actor.itemTypes.spell
            .filter(s => s.system?.location?.value === focus?.id)
            .map(i => i.id)
    );

    setTimeout(async function () {
        await createLores(item)
        await createSpells(entry)
        await createFocus(focus)
    }, 150)
});

async function createLores(item) {
    let lores = item.actor.getRollOptions()
        .filter(o => APPARITION_OPTIONS.some(a => o.startsWith(a)))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join('|')}`, 'i'), ''))
        .map(r => APPARITIONS[r] || [])
        .flat()

    let items = lores.map(lore => {
        let newEffect = foundry.utils.deepClone(LORE_SKILL);
        newEffect._id = foundry.utils.randomID()
        newEffect.name = `${lore} Lore`
        newEffect.flags[moduleName] = {
            generated: true
        }

        return newEffect
    })

    await item.actor.createEmbeddedDocuments("Item", items);

    ui.notifications.info(`Lores were changed for ${item.actor.name}`);
}

async function createSpells(spellEntry) {
    let level = Math.ceil(spellEntry.actor.level / 2)
    let apSpells = spellEntry.actor.getRollOptions()
        .filter(o => APPARITION_OPTIONS.some(a => o.startsWith(a)))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join('|')}`, 'i'), ''))
        .map(r => APPARITIONS_SPELLCASTING[r] || [])

    let allSpells = []
    for (const spells of apSpells) {
        for (let i = 0; i < spells.length; i++) {
            if (i > level) {
                break
            }
            let o = (await fromUuid(spells[i])).toObject();
            o.system.location.value = spellEntry.id;
            if (i) {
                o.system.location.heightenedLevel = i;
            }
            allSpells.push(o);
        }
    }

    await spellEntry.actor.createEmbeddedDocuments("Item", allSpells);

    ui.notifications.info(`Spells were changed for ${spellEntry.actor.name}`);
}

async function createFocus(spellEntry) {
    let focus = spellEntry.actor.getRollOptions()
        .filter(o => o.startsWith('primary-apparition:'))
        .map(s => s.replace(new RegExp(`${APPARITION_OPTIONS.join('|')}`, 'i'), ''))
        .map(r => VESSEL_FOCUS[r])
        .find(a => a)
    if (focus) {
        focus = (await fromUuid(focus)).toObject();
        focus.system.location.value = spellEntry.id;

        await spellEntry.actor.createEmbeddedDocuments("Item", [focus]);
    }
}

Hooks.on("pf2e.restForTheNight", async (actor) => {
    let aa = actor.itemTypes.feat.find(s => s.slug === 'apparition-attunement');
    let ta = actor.itemTypes.feat.find(s => s.slug === 'third-attunement');
    let fa = actor.itemTypes.feat.find(s => s.slug === 'fourth-attunement');
    if (aa) {
        await actor.toggleRollOption("all", "primary-apparition", aa.id, true, "dispersed")
        await actor.toggleRollOption("all", "secondary-apparition", aa.id, true, "dispersed")
    }
    if (ta) {
        await actor.toggleRollOption("all", "third-apparition", ta.id, true, "dispersed")
    }
    if (fa) {
        await actor.toggleRollOption("all", "fourth-apparition", fa.id, true, "dispersed")
    }
});
