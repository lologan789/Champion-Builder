const champion =
{
    "Champions": {
        "Tank": {
        "AP": {
            "Melee": [
            "Alistar",
            "Amumu",
            "Blitzcrank",
            "Braum",
            "Cho'Gath",
            "Galio",
            "Gragas",
            "Leona",
            "Malphite",
            "Maokai",
            "Nautilus",
            "Ornn",
            "Tahm Kench",
            "Taric",
            "Zac",
            "Rammus",
            "Sejuani",
            "Shen",
            "Dr.Mundo",
            "Rell",
            "Skarner",
            "Nunu"
            ],
            "Range": ["Thresh"]
        },
        "AD": {
            "Melee": [
            "Poppy",
            "Sion",
            "Illaoi",
            "K'Sante"
            ]
        }
        },
        "Bruiser": {
        "AP": {
            "Melee": [
            "Shyvana",
            "Diana",
            "Mordekaiser",
            "Rumble",
            "Singed",
            "Gwen",
            "Sylas",
            "Udyr",
            "Volibear"
            ]
        },
        "AD": {
            "Melee": [
            "Aatrox",
            "Ambessa",
            "Bel'Veth",
            "Briar",
            "Camille",
            "Darius",
            "Wukong",
            "Garen",
            "Sett",
            "Yorick",
            "Jax",
            "Xin Zhao",
            "Lee Sin",
            "Vi",
            "Irelia",
            "Riven",
            "Fiora",
            "Renekton",
            "Nasus",
            "Tryndamere",
            "Viego",
            "Warwick",
            "Trundle",
            "Jarvan IV",
            "Rek'Sai",
            "Olaf",
            "Hecarim",
            "Gangplank"
            ],
            "Range": [
            "Urgot",
            "Gnar"
            ]
        }
        },
        "Marksman": {
        "AD": {
            "Melee": [
            "Yone",
            "Yasuo",
            "Master Yi",
            "Nilah"
            ],
            "Range": [
            "Akshan",
            "Aphelios",
            "Ashe",
            "Caitlyn",
            "Draven",
            "Ezreal",
            "Jhin",
            "Jinx",
            "Kalista",
            "Kai'Sa",
            "Kog'Maw",
            "Lucian",
            "Miss Fortune",
            "Samira",
            "Sivir",
            "Tristana",
            "Twitch",
            "Varus",
            "Vayne",
            "Xayah",
            "Zeri",
            "Smolder",
            "Senna",
            "Corki"
            ]
        },
        "AP": {
            "Range": [
            "Teemo",
            "Kayle"
            ]
        }
        },
        "Mage": {
        "AP": {
            "Melee": ["Kassadin"],
            "Range": [
            "Ahri",
            "Anivia",
            "Annie",
            "Aurelion Sol",
            "Aurora",
            "Azir",
            "Brand",
            "Cassiopeia",
            "Fiddlesticks",
            "Heimerdinger",
            "Karthus",
            "Kennen",
            "Lissandra",
            "Vladimir",
            "Lux",
            "Malzahar",
            "Neeko",
            "Orianna",
            "Ryze",
            "Swain",
            "Syndra",
            "Taliyah",
            "Twisted Fate",
            "Veigar",
            "Vel'Koz",
            "Viktor",
            "Xerath",
            "Ziggs",
            "Zoe",
            "Zyra",
            "Zilean",
            "Seraphine",
            "Vex",
            "Morgana",
            "Lillia"
            ]
        }
        },
        "Assassin": {
        "AP": {
            "Melee": [
            "Akali",
            "Ekko",
            "Evelynn",
            "Fizz",
            "Katarina"
            ],
            "Range": [
            "LeBlanc",
            "Nidalee",
            "Elise"
            ]
        },
        "AD": {
            "Melee": [
            "Kha'Zix",
            "Rengar",
            "Shaco",
            "Talon",
            "Zed",
            "Pyke",
            "Pantheon",
            "Qiyana",
            "Nocturne",
            "Kayn",
            "Kled"
            ],
            "Range": [
            "Graves",
            "Quinn",
            "Kindred",
            "Jayce"
            ]
        }
        },
        "Enchanter": {
        "AP": {
            "Melee": ["Rakan"],
            "Range": [
            "Bard",
            "Ivern",
            "Janna",
            "Karma",
            "Lulu",
            "Nami",
            "Sona",
            "Soraka",
            "Yuumi",
            "Milio"
            ]
        }
        }
    }
}
      
const items =
{
    "Tank": {
      "HP": [
        "Heartsteel",
        "Warmog",
        "Titanic Hydra"
      ],
      "Armor": [
        "Thornmail",
        "Sunfire",
        "Randuin",
        "Frozen Heart",
        "Dead Man's Plate"
      ],
      "MR": [
        "Spirit Visage",
        "Abyssal Mask",
        "Kaenic Rookern",
        "Hollow Radiance",
        "Force of Nature"
      ],
      "Durability": [
        "Unending Despair",
        "Fimbulwinter",
        "Jak'Sho, The Protean"
      ]
    },
    "Bruiser": {
      "AD": {
        "Damage": [
          "Trinity Force",
          "Stridebreaker",
          "Black Cleaver",
          "Spear of Shojin"
        ],
        "LifeSteal": [
          "Blade of the Ruined King",
          "Ravenous Hydra"
        ],
        "Durability": [
          "Guardian Angel",
          "Spirit Visage",
          "Sterak Gage",
          "Death's Dance",
          "Malmortius",
          "Sundered Sky",
          "Wit's End",
          "Titanic Hydra"
        ]
      },
      "AP": {
        "Damage": [
          "Hextech Rocketbelt",
          "Lich Bane",
          "Blackfire Torch"
        ],
        "HP": [
          "Rylai's Crystal Scepter",
          "Liandry"
        ],
        "Durability": [
          "Riftmaker",
          "Zhonya's Hourglass",
          "Banshee's Veil",
          "Rod of Ages",
          "Jak'Sho, The Protean"
        ],
        "AS": [
          "Nashor's Tooth"
        ],
        "Burst": [
          "Rabadon's Deathcap",
          "Stormsurge",
          "Shadowflame"
        ]
      }
    },
    "Enchanter": {
      "Mobility": [
        "Shurelya"
      ],
      "Regen": [
        "Redemption",
        "Moonstone"
      ],
      "Utility": [
        "Mikael",
        "Ardent Censer",
        "Staff of Flowing Water",
        "Locket of the Iron Solari",
        "Imperial Mandate",
        "Echoes of Helia"
      ]
    },
    "Assassin": {
      "AD": {
        "Damage": [
          "Profane Hydra",
          "Collector",
          "Hubris",
          "Axiom Arc",
          "Voltaic Cyclosword",
          "Spear of Shojin"
        ],
        "Mobility": [
          "Youmuu's Ghostblade",
          "Opportunity"
        ],
        "ArmorPen": [
          "Serylda",
          "Black Cleaver",
          "Serpent's Fang"
        ],
        "Survivability": [
          "Edge of Night",
          "Death's Dance",
          "Malmortius",
          "Guardian Angel",
          "Sterak's Gage",
          "Sundered Sky"
        ]
      },
      "AP": {
        "MagicPen": [
          "Void Staff",
          "Bloodletter's Curse"
        ],
        "Burst": [
          "Stormsurge",
          "Shadowflame",
          "Lich Bane",
          "Rabadon's Deathcap"
        ],
        "Mobility": [
          "Hextech Rocketbelt"
        ],
        "Survivability": [
          "Zhonya's Hourglass",
          "Banshee's Veil",
          "Cryptbloom"
        ],
        "AS": [
          "Nashor's Tooth"
        ]
      }
    },
    "Mage": {
      "AS": [
        "Nashor's Tooth"
      ],
      "Burst": [
        "Luden's Companion",
        "Rabadon's Deathcap",
        "Shadowflame",
        "Stormsurge",
        "Horizon Focus"
      ],
      "Survivability": [
        "Seraphin",
        "Rod of Ages",
        "Zhonya",
        "Banshee"
      ],
      "MagicPen": [
        "Void Staff"
      ],
      "Poke": [
        "Blackfire Torch",
        "Liandry's Torment",
        "Morellonomicon"
      ],
      "CDR": [
        "Cosmic Drive",
        "Malignance"
      ]
    },
    "Marksman": {
      "AD": {
        "Damage": [
            "The Collector"
        ],
        "AS": [
            "Static Shiv",
            "Rapid Firecannon",
            "Runaan's Hurricane"
        ],
        "Crit": [
            "Infinity Edge",
            "Yun Tal Wildarrows",
        ],
        "Lifesteal": [
            "Bloodthirster",
            "Blade of the Ruined King"
        ],
        "ArmorPen": [
            "Lord Dominik's Regards",
            "Mortal Reminder"
        ],
        "Mobility": [
            "Phantom Dancer"
        ],
        "OnHit": [
            "Kraken Slayer",
            "Guinsoo's Rageblade",
            "Terminus"
        ],
        "Survivability": [
            "Guardian Angel"
        ]
      },
      "AP": {
        "Damage": [
            "Lich Bane",
            "Liandry's Torment",
            "Malignance",
            "Rabadon's Deathcap",
            "Shadowflame",
            "Rylai's Crystal Scepter"
        ],
        "AS": [
            "Nashor's Tooth",
            "Guinsoo's Rageblade"
        ],
        "Survivability": [
            "Zhonya's Hourglass",
            "Banshee's Veil"
        ]
      }
    }
}
  


const getAllItems = () => {
    const appItems = [];

    const traverse = (obj) => {
        for (const key in obj) {
            if (Array.isArray(obj[key])) {
                // Si la valeur est une liste, on ajoute ses éléments
                appItems.push(...obj[key]);
            } else if (typeof obj[key] === "object") {
                // Si la valeur est un objet, on le parcourt récursivement
                traverse(obj[key]);
            }
        }
    };

    // Parcourt les données des items définies dans le même fichier
    traverse(items);
    return appItems;
};

function getChampionType(championName) {
    // Vérifier dans l'ontologie le type du champion (Tank, Bruiser, etc.)
    for (let type in champion["Champions"]) {
        for (let special in champion["Champions"][type]) {
            for (let role in champion["Champions"][type][special]) {
                if (champion["Champions"][type][special][role].includes(championName)) {
                    return type;
                }
            }
        }
    }
    return null; // Si le champion n'est pas trouvé
}

function getChampionSpecialization(championName) {
    // Identifie la spécialisation du champion (AP, AD)
    for (let type in champion["Champions"]) {
        for (let special in champion["Champions"][type]) {
            for (let role in champion["Champions"][type][special]) {
                if (champion["Champions"][type][special][role].includes(championName)) {
                    return special;
                }
            }
        }
    }
    return null; // Si la spécialisation n'est pas trouvée
}

function getItemType(objet) {
    // Vérifier le type de l'objet (Tank, Bruiser, etc.)
    for (let type in items) {
        for (let specialization in items[type]) {
            for (let category in items[type][specialization]) {
                if (items[type][specialization][category].includes(objet)) {
                    return type;
                }
            }
        }
    }
    return null; // Si l'objet n'est pas trouvé
}

function getItemSpecialization(objet) {
    // Identifier la spécialisation de l'objet (AD, AP, etc.)
    for (let type in items) {
        for (let specialization in items[type]) {
            for (let category in items[type][specialization]) {
                if (items[type][specialization][category].includes(objet)) {
                    if (type == "Tank" || type == "Enchanter" || type == "Mage") {
                        return "All";
                    }
                    else
                    return specialization;
                }
            }
        }
    }
    return "All"; // Si aucune spécialisation spécifique n'est trouvée
}

function verificationObjet(championName, objet) {
    // Récupérer le type et la spécialisation du champion
    const championType = getChampionType(championName);
    console.log(championType);
    const championSpecialization = getChampionSpecialization(championName);
    console.log(championSpecialization);
    
    // Récupérer le type et la spécialisation de l'objet
    const itemType = getItemType(objet);
    const itemSpecialization = getItemSpecialization(objet);

    console.log(itemType);
    console.log(itemSpecialization);
    
    // Comparer les spécialisation et types
    console.log("oui");
    if (championType === itemType && (itemSpecialization === championSpecialization || itemSpecialization === "All")) {
        return true; // L'objet est adapté au champion
    }
    
    return false; // L'objet n'est pas adapté
}
