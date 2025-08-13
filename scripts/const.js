export const FIRST = {
    "key": "RollOption",
    "option": "primary-apparition",
    "suboptions": [
        {
            "label": "pf2e-animist.crafter-in-the-vault",
            "value": "crafter-in-the-vault"
        },
        {
            "label": "pf2e-animist.custodian-of-groves-and-gardens",
            "value": "custodian-of-groves-and-gardens"
        },
        {
            "label": "pf2e-animist.echo-of-lost-moments",
            "value": "echo-of-lost-moments"
        },
        {
            "label": "pf2e-animist.impostor-in-hidden-places",
            "value": "impostor-in-hidden-places"
        },
        {
            "label": "pf2e-animist.lurker-in-devouring-dark",
            "value": "lurker-in-devouring-dark"
        },
        {
            "label": "pf2e-animist.monarch-of-the-fey-courts",
            "value": "monarch-of-the-fey-courts"
        },
        {
            "label": "pf2e-animist.reveler-in-lost-glee",
            "value": "reveler-in-lost-glee"
        },
        {
            "label": "pf2e-animist.shepherd-of-errant-winds",
            "value": "shepherd-of-errant-winds"
        },
        {
            "label": "pf2e-animist.speaker-in-sibilance",
            "value": "speaker-in-sibilance"
        },
        {
            "label": "pf2e-animist.stalker-in-darkened-boughs",
            "value": "stalker-in-darkened-boughs"
        },
        {
            "label": "pf2e-animist.steward-of-stone-and-fire",
            "value": "steward-of-stone-and-fire"
        },
        {
            "label": "pf2e-animist.vanguard-of-roaring-waters",
            "value": "vanguard-of-roaring-waters"
        },
        {
            "label": "pf2e-animist.witness-to-ancient-battles",
            "value": "witness-to-ancient-battles"
        },
        {
            "label": "pf2e-animist.dispersed",
            "value": "dispersed"
        }
    ],
    "toggleable": true,
    "alwaysActive": true,
    "label": "pf2e-animist.primary-label",
    "value": true,
    "selection": "dispersed"
};

export const SECOND = {
    "key": "RollOption",
    "option": "secondary-apparition",
    "suboptions": [
        {
            "label": "Crafter in the Vault",
            "value": "crafter-in-the-vault",
            "predicate": [
                {
                    "not": "primary-apparition:crafter-in-the-vault"
                }
            ]
        },
        {
            "label": "pf2e-animist.custodian-of-groves-and-gardens",
            "value": "custodian-of-groves-and-gardens",
            "predicate": [
                {
                    "not": "primary-apparition:custodian-of-groves-and-gardens"
                }
            ]
        },
        {
            "label": "pf2e-animist.echo-of-lost-moments",
            "value": "echo-of-lost-moments",
            "predicate": [
                {
                    "not": "primary-apparition:echo-of-lost-moments"
                }
            ]
        },
        {
            "label": "pf2e-animist.impostor-in-hidden-places",
            "value": "impostor-in-hidden-places",
            "predicate": [
                {
                    "not": "primary-apparition:impostor-in-hidden-places"
                }
            ]
        },
        {
            "label": "pf2e-animist.lurker-in-devouring-dark",
            "value": "lurker-in-devouring-dark",
            "predicate": [
                {
                    "not": "primary-apparition:lurker-in-devouring-dark"
                }
            ]
        },
        {
            "label": "pf2e-animist.monarch-of-the-fey-courts",
            "value": "monarch-of-the-fey-courts",
            "predicate": [
                {
                    "not": "primary-apparition:monarch-of-the-fey-courts"
                }
            ]
        },
        {
            "label": "pf2e-animist.reveler-in-lost-glee",
            "value": "reveler-in-lost-glee",
            "predicate": [
                {
                    "not": "primary-apparition:reveler-in-lost-glee"
                }
            ]
        },
        {
            "label": "pf2e-animist.shepherd-of-errant-winds",
            "value": "shepherd-of-errant-winds",
            "predicate": [
                {
                    "not": "primary-apparition:shepherd-of-errant-winds"
                }
            ]
        },
        {
            "label": "pf2e-animist.speaker-in-sibilance",
            "value": "speaker-in-sibilance",
            "predicate": [
                {
                    "not": "primary-apparition:speaker-in-sibilance"
                }
            ]
        },
        {
            "label": "pf2e-animist.stalker-in-darkened-boughs",
            "value": "stalker-in-darkened-boughs",
            "predicate": [
                {
                    "not": "primary-apparition:stalker-in-darkened-boughs"
                }
            ]
        },
        {
            "label": "pf2e-animist.steward-of-stone-and-fire",
            "value": "steward-of-stone-and-fire",
            "predicate": [
                {
                    "not": "primary-apparition:steward-of-stone-and-fire"
                }
            ]
        },
        {
            "label": "pf2e-animist.vanguard-of-roaring-waters",
            "value": "vanguard-of-roaring-waters",
            "predicate": [
                {
                    "not": "primary-apparition:vanguard-of-roaring-waters"
                }
            ]
        },
        {
            "label": "pf2e-animist.witness-to-ancient-battles",
            "value": "witness-to-ancient-battles",
            "predicate": [
                {
                    "not": "primary-apparition:witness-to-ancient-battles"
                }
            ]
        },
        {
            "label": "pf2e-animist.dispersed",
            "value": "dispersed"
        }
    ],
    "toggleable": true,
    "alwaysActive": true,
    "label": "pf2e-animist.secondary-label",
    "value": true,
    "selection": "dispersed"
};

export const THIRD = {
    "key": "RollOption",
    "option": "third-apparition",
    "suboptions": [
        {
            "label": "pf2e-animist.crafter-in-the-vault",
            "value": "crafter-in-the-vault",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:crafter-in-the-vault",
                        "secondary-apparition:crafter-in-the-vault"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.custodian-of-groves-and-gardens",
            "value": "custodian-of-groves-and-gardens",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:custodian-of-groves-and-gardens",
                        "secondary-apparition:custodian-of-groves-and-gardens"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.echo-of-lost-moments",
            "value": "echo-of-lost-moments",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:apparition:echo-of-lost-moments",
                        "secondary-apparition:apparition:echo-of-lost-moments"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.impostor-in-hidden-places",
            "value": "impostor-in-hidden-places",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:impostor-in-hidden-places",
                        "secondary-apparition:impostor-in-hidden-places"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.lurker-in-devouring-dark",
            "value": "lurker-in-devouring-dark",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:lurker-in-devouring-dark",
                        "secondary-apparition:lurker-in-devouring-dark"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.monarch-of-the-fey-courts",
            "value": "monarch-of-the-fey-courts",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:monarch-of-the-fey-courts",
                        "secondary-apparition:monarch-of-the-fey-courts"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.reveler-in-lost-glee",
            "value": "reveler-in-lost-glee",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:reveler-in-lost-glee",
                        "secondary-apparition:reveler-in-lost-glee"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.shepherd-of-errant-winds",
            "value": "shepherd-of-errant-winds",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:shepherd-of-errant-winds",
                        "secondary-apparition:shepherd-of-errant-winds"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.speaker-in-sibilance",
            "value": "speaker-in-sibilance",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:speaker-in-sibilance",
                        "secondary-apparition:speaker-in-sibilance"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.stalker-in-darkened-boughs",
            "value": "stalker-in-darkened-boughs",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:stalker-in-darkened-boughs",
                        "secondary-apparition:stalker-in-darkened-boughs"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.steward-of-stone-and-fire",
            "value": "steward-of-stone-and-fire",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:steward-of-stone-and-fire",
                        "secondary-apparition:steward-of-stone-and-fire"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.vanguard-of-roaring-waters",
            "value": "vanguard-of-roaring-waters",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:vanguard-of-roaring-waters",
                        "secondary-apparition:vanguard-of-roaring-waters"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.witness-to-ancient-battles",
            "value": "witness-to-ancient-battles",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:witness-to-ancient-battles",
                        "secondary-apparition:witness-to-ancient-battles"
                    ]
                }
            ]
        },
        {
            "label": "Dispersed",
            "value": "dispersed"
        }
    ],
    "toggleable": true,
    "alwaysActive": true,
    "label": "pf2e-animist.third-label",
    "value": true,
    "selection": "dispersed"
};

export const FOURTH = {
    "key": "RollOption",
    "option": "fourth-apparition",
    "suboptions": [
        {
            "label": "pf2e-animist.crafter-in-the-vault",
            "value": "crafter-in-the-vault",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:crafter-in-the-vault",
                        "secondary-apparition:crafter-in-the-vault",
                        "third-apparition:crafter-in-the-vault"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.custodian-of-groves-and-gardens",
            "value": "custodian-of-groves-and-gardens",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:custodian-of-groves-and-gardens",
                        "secondary-apparition:custodian-of-groves-and-gardens",
                        "third-apparition:custodian-of-groves-and-gardens"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.echo-of-lost-moments",
            "value": "echo-of-lost-moments",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:apparition:echo-of-lost-moments",
                        "secondary-apparition:apparition:echo-of-lost-moments",
                        "third-apparition:apparition:echo-of-lost-moments"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.impostor-in-hidden-places",
            "value": "impostor-in-hidden-places",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:impostor-in-hidden-places",
                        "secondary-apparition:impostor-in-hidden-places",
                        "third-apparition:impostor-in-hidden-places"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.lurker-in-devouring-dark",
            "value": "lurker-in-devouring-dark",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:lurker-in-devouring-dark",
                        "secondary-apparition:lurker-in-devouring-dark",
                        "third-apparition:lurker-in-devouring-dark"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.monarch-of-the-fey-courts",
            "value": "monarch-of-the-fey-courts",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:monarch-of-the-fey-courts",
                        "secondary-apparition:monarch-of-the-fey-courts",
                        "third-apparition:monarch-of-the-fey-courts"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.reveler-in-lost-glee",
            "value": "reveler-in-lost-glee",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:reveler-in-lost-glee",
                        "secondary-apparition:reveler-in-lost-glee",
                        "third-apparition:reveler-in-lost-glee"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.shepherd-of-errant-winds",
            "value": "shepherd-of-errant-winds",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:shepherd-of-errant-winds",
                        "secondary-apparition:shepherd-of-errant-winds",
                        "third-apparition:shepherd-of-errant-winds"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.speaker-in-sibilance",
            "value": "speaker-in-sibilance",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:speaker-in-sibilance",
                        "secondary-apparition:speaker-in-sibilance",
                        "third-apparition:speaker-in-sibilance"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.stalker-in-darkened-boughs",
            "value": "stalker-in-darkened-boughs",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:stalker-in-darkened-boughs",
                        "secondary-apparition:stalker-in-darkened-boughs",
                        "third-apparition:stalker-in-darkened-boughs"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.steward-of-stone-and-fire",
            "value": "steward-of-stone-and-fire",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:steward-of-stone-and-fire",
                        "secondary-apparition:steward-of-stone-and-fire",
                        "third-apparition:steward-of-stone-and-fire"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.vanguard-of-roaring-waters",
            "value": "vanguard-of-roaring-waters",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:vanguard-of-roaring-waters",
                        "secondary-apparition:vanguard-of-roaring-waters",
                        "third-apparition:vanguard-of-roaring-waters"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.witness-to-ancient-battles",
            "value": "witness-to-ancient-battles",
            "predicate": [
                {
                    "nor": [
                        "primary-apparition:witness-to-ancient-battles",
                        "secondary-apparition:witness-to-ancient-battles",
                        "third-apparition:witness-to-ancient-battles"
                    ]
                }
            ]
        },
        {
            "label": "pf2e-animist.dispersed",
            "value": "dispersed"
        }
    ],
    "toggleable": true,
    "alwaysActive": true,
    "label": "pf2e-animist.fourth-label",
    "value": true,
    "selection": "dispersed"
}

export const moduleName = "pf2e-animist";

export const APPARITIONS = {
    "crafter-in-the-vault": ["Architecture", "Engineering"],
    "custodian-of-groves-and-gardens": ["Farming", "Herbalism"],
    "echo-of-lost-moments": ["Fortune-Telling", "Genealogy"],
    "impostor-in-hidden-places": ["Fortune-Telling", "Underworld"],
    "lurker-in-devouring-dark": ["Ocean", "Sailing"],
    "monarch-of-the-fey-courts": ["Art", "Fey"],
    "reveler-in-lost-glee": ["Circus", "Fortune-Telling"],
    "shepherd-of-errant-winds": ["Sailing", "Scouting"],
    "speaker-in-sibilance": ["Fortune-Telling", "Mountain"],
    "stalker-in-darkened-boughs": ["Forest", "Hunting"],
    "steward-of-stone-and-fire": ["Mountain", "Volcano"],
    "vanguard-of-roaring-waters": ["Mountain", "River"],
    "witness-to-ancient-battles": ["Battlegrounds", "Heraldry"],
}
export const UUID_APPARITIONS = {
    "Compendium.pf2e.classfeatures.Item.csrF8UOWPl1rr6st": "crafter-in-the-vault",
    "Compendium.pf2e.classfeatures.Item.EyRHVD4h2eZYIsk5": "custodian-of-groves-and-gardens",
    "Compendium.pf2e.classfeatures.Item.UbOFa3BBHO8HwLJR": "echo-of-lost-moments",
    "Compendium.pf2e.classfeatures.Item.Gss5cYmRySgi1UxP": "impostor-in-hidden-places",
    "Compendium.pf2e.classfeatures.Item.NNVkvA9fmyFy68ag": "lurker-in-devouring-dark",
    "Compendium.pf2e.classfeatures.Item.95maDg6AsCTLPAmS": "monarch-of-the-fey-courts",
    "Compendium.pf2e.classfeatures.Item.9PYHXFMmbHyp4aTL": "reveler-in-lost-glee",
    "Compendium.pf2e.classfeatures.Item.aFVxfp7uQ0ac87GN": "shepherd-of-errant-winds",
    "Compendium.pf2e.classfeatures.Item.2XlUg9JXtwnSbWOY": "speaker-in-sibilance",
    "Compendium.pf2e.classfeatures.Item.ImJ09rEZW5WtS26L": "stalker-in-darkened-boughs",
    "Compendium.pf2e.classfeatures.Item.ILGq8LQBnwsAz2jK": "steward-of-stone-and-fire",
    "Compendium.pf2e.classfeatures.Item.M3q0KIyuMvSgUZH7": "vanguard-of-roaring-waters",
    "Compendium.pf2e.classfeatures.Item.k9P2mXRjyy5X24rH": "witness-to-ancient-battles",
}

export const VESSEL_FOCUS = {
    "crafter-in-the-vault": "Compendium.pf2e.spells-srd.Item.rzcXUF5YmJYxgxEa",
    "custodian-of-groves-and-gardens": "Compendium.pf2e.spells-srd.Item.w4M6Vqvq8k6MOFvj",
    "echo-of-lost-moments": "Compendium.pf2e.spells-srd.Item.FZMVLL7HvasjiM6D",
    "impostor-in-hidden-places": "Compendium.pf2e.spells-srd.Item.t1e3U2eluRsp2izf",
    "lurker-in-devouring-dark": "Compendium.pf2e.spells-srd.Item.wTldMJx0vyBAehrI",
    "monarch-of-the-fey-courts": "Compendium.pf2e.spells-srd.Item.SAmyaiVKTDrUNjot",
    "reveler-in-lost-glee": "Compendium.pf2e.spells-srd.Item.cuKVbWWNzJj1GDpZ",
    "shepherd-of-errant-winds": "Compendium.pf2e.spells-srd.Item.x2Gf3lt64eoMocMd",
    "speaker-in-sibilance": "Compendium.pf2e.spells-srd.Item.h2DLv8TQV0Z83tQp",
    "stalker-in-darkened-boughs": "Compendium.pf2e.spells-srd.Item.BhJtCTLbngvZm8EA",
    "steward-of-stone-and-fire": "Compendium.pf2e.spells-srd.Item.PrlR2sLWeiuTcPF2",
    "vanguard-of-roaring-waters": "Compendium.pf2e.spells-srd.Item.ew4ToaTU3o8ahKio",
    "witness-to-ancient-battles": "Compendium.pf2e.spells-srd.Item.X4On99Nti8gjWywG",
}

export const APPARITIONS_SPELLCASTING = {
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
    "custodian-of-groves-and-gardens": [
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
    "impostor-in-hidden-places": [
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
    "lurker-in-devouring-dark": [
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
    "reveler-in-lost-glee": [
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
    "shepherd-of-errant-winds": [
        "Compendium.pf2e.spells-srd.Item.1Yoipc5jNcMehtEW",
        "Compendium.pf2e.spells-srd.Item.KcLVELhCUcKXxiKE",
        "Compendium.pf2e.spells-srd.Item.jlOAXuIOM3YxZKmn",
        "Compendium.pf2e.spells-srd.Item.it4ZsAi6XgvGcodc",
        "Compendium.pf2e.spells-srd.Item.V8wXOsoejQhe6CyG",
        "Compendium.pf2e.spells-srd.Item.Ek5XI0aEdZhBgm21",
        "Compendium.pf2e.spells-srd.Item.WPXzPl7YbMEIGWfi",
        "Compendium.pf2e.spells-srd.Item.kk7JKox6MdGAWmCH",
        "Compendium.pf2e.spells-srd.Item.wi405lBjPcbF1DeR",
        "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx"
    ],
    "speaker-in-sibilance": [
        "Compendium.pf2e.spells-srd.Item.D7ZEhTNIDWDLC2J4",
        "Compendium.pf2e.spells-srd.Item.6ZIKB0151LUR19Rw",
        "Compendium.pf2e.spells-srd.Item.CQb8HtQ1BPeZmu9h",
        "Compendium.pf2e.spells-srd.Item.ZYoC630tNGutgbE0",
        "Compendium.pf2e.spells-srd.Item.wLWMswY7aBHEFTRb",
        "Compendium.pf2e.spells-srd.Item.xFp4EwVcYwSG336t",
        "Compendium.pf2e.spells-srd.Item.znv4ECL7ZtuiagtA",
        "Compendium.pf2e.spells-srd.Item.O6VQC1Bs4aSYDa6R",
        "Compendium.pf2e.spells-srd.Item.y2cQYLr5mljDSu1G",
        "Compendium.pf2e.spells-srd.Item.FmNDwqMEjeTEGPrY"
    ],
    "stalker-in-darkened-boughs": [
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
    "steward-of-stone-and-fire": [
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
    "vanguard-of-roaring-waters": [
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
    "witness-to-ancient-battles": [
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

export const LORE_SKILL = {
    "_id": "",
    img: "systems/pf2e/icons/default-icons/lore.svg",
    "name": "",
    "flags": {},
    "system": {
        "proficient": {"value": 1}
    },
    "type": "lore"
}

export const LEVEL_SLOT = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [2, 2, 2, 1, 1, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
    [2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
    [2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
]

export const SPELLCASTING_ENTRY = {
    "_id": "",
    "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
    "name": "Apparition Attunement",
    "system": {
        "ability": {"value": "wis"},
        "spelldc": {"value": 0, "dc": 0},
        "tradition": {"value": "divine"},
        "prepared": {"value": "spontaneous"},
        "showSlotlessLevels": {"value": false},
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

export const FOCUS_ENTRY = {
    "_id": "",
    "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
    "name": "Vessel Spells",
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

export const APPARITION_OPTIONS = ["primary-apparition:", "secondary-apparition:", "third-apparition:", "fourth-apparition:"];

