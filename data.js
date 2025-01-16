attributs:
    - Top / Mid / Bot / Jungle / Support
    - Tank / Bruiser / Assassin / Mage / Marksman / Enchanter 
    - AD / AP
    - Melee / Ranged
    

const Champions =
`
Tank
    AP
        Melee
            - Alistar
            - Amumu
            - Blitcrank
            - Braum
            - Cho'Gath
            - Galio
            - Gragas
            - Leona
            - Malphite
            - Maokai
            - Nautilus
            - Ornn
            - Tahm Kench
            - Taric
            - Zac
            - Rammus
            - Sejuani
            - Shen
            - Dr.Mundo
            - Rell
            - Skarner
            - Nunu & Willump
        
        Range
            - Thresh

    AD
        Melee
            - Poppy  
            - Sion
            - Illaoi
            - K'Sante
            
Bruiser
    AP
        Melee
            - Shyvana
            - Diana
            - Mordekaiser
            - Rumble
            - Singed
            - Gwen
            - Sylas
            - Udyr
            - Volibear
            
    AD
        Melee
            - Aatrox
            - Ambessa
            - Bel'Veth
            - Briar
            - Camille
            - Darius
            - Wukong
            - Garen
            - Sett
            - Yorick
            - Jax
            - Xin Zhao
            - Lee Sin
            - Vi
            - Irelia
            - Riven
            - Fiora
            - Renekton
            - Nasus
            - Tryndamere
            - Viego
            - Warwick
            - Trundle
            - Jarvan IV

        Range
            - Urgot
            - Gnar

Marksman
    AD
        Melee
            - Yone 
            - Yasuo
            - Master Yi
        Range
            - Akshan
            - Aphelios
            - Ashe
            - Caitlyn
            - Draven
            - Ezreal
            - Jhin
            - Jinx
            - Kalista
            - Kai'sa
            - Kog'Maw
            - Lucian
            - Miss Fortune
            - Samira
            - Sivir
            - Tristana
            - Twitch
            - Varus
            - Vayne
            - Xayah
            - Zeri
            - Smolder
            - Senna
    AP
        Range
            - Teemo
            - Kayle

Mage
    AP
        Melee
            - Kassadin

        Range
            - Ahri
            - Anivia
            - Annie
            - Aurelion Sol
            - Aurora
            - Azir
            - Brand
            - Cassiopeia
            - Fiddlesticks
            - Heimerdinger
            - Karthus
            - Kennen
            - Lissandra
            - Vladimir
            - Lux
            - Malzahar
            - Neeko
            - Orianna
            - Ryze
            - Swain
            - Syndra
            - Taliyah
            - Twisted Fate
            - Veigar
            - Vel'Koz
            - Viktor
            - Xerath
            - Ziggs
            - Zoe
            - Zyra
            - Zilean
            - Seraphine
            - Vex

Assassin
    AP
        Melee
            - Akali
            - Ekko
            - Evelynn
            - Fizz
            - Katarina
            
        Range
            - LeBlanc
            - Nidalee
            - Elise

    AD
        Melee
            - Kha'Zix
            - Rengar
            - Shaco
            - Talon
            - Zed
            - Pyke
            - Pantheon
            - Qiyana
            
        Range
            - Graves
            - Quinn
            - Kindred
            - Jayce

Enchanter
    AP
        Melee
            - Rakan

        Range
            - Bard
            - Ivern
            - Janna
            - Karma
            - Lulu
            - Nami
            - Sona
            - Soraka
            - Yuumi
            - Milio
`


const items = 
`
Tank
    HP
        - HearthSteel
        - Warmog
        - Titanic Hydra
    Armor
        - Thornmail
        - Sunfire
        - Randuin
        - Frozen Heart
        - Dead Man's Plate
    MR
        - Spirit Visage
        - Abyssal Mask
        - Kaenic Rookern
        - Hollow Radiance
        - Force of Nature
    Durability
        - Unending Despair
        - Fimbulwinter
        - Jak'Sho, The Protean    

Bruiser
    AD 
        Damage
            - Trinity Force
            - Stridebreaker
            - Black Cleaver
            - Spear of Shojin
        LifeSteal
            - Blade of the Ruined King
            - Ravenous Hydra
        Durability
            - Guardian Angel
            - Spirit Visage
            - Sterak Gage
            - Death's Dance
            - Malmortius
            - Sundered Sky
            - Wit's End
            - Titanic Hydra

    AP
        Damage
            - Hextech Rocketbelt
            - Lich Bane
            - Blackfire Torch
        HP
            - Rylai
            - Liandry
        Durability
            - Riftmaker
            - Zhonya's Hourglass
            - Banshee's Veil
            - Rod of Ages
            - Jak'Sho, The Protean
        AS
            - Nashor's Tooth
        Burst
            - Rabadon's Deathcap
            - Stormsurge
            - Shadowflame
Enchanter
    Mobility
        - Shurelya
    Regen
        - Redemption
        - Moonstone
    Utility
        - Mikael
        - Ardent Censer
        - Staff of Flowing Water
        - Locket of the Iron Solari
        - Imperial Mandate
        - Echoes of Helia
Assassin
    Ad
        Damage
            - Profane Hydra
            - Collector
            - Hubris
            - Axiom Arc
            - Voltaic Cyclosword
            - Spear of Shojin
        Mobility
            - Youmuu's Ghostblade
            - Opportunity
        ArmorPen
            - Serylda
            - Black Cleaver
            - Serpent's Fang
        Survivability
            - Edge of Night
            - Death's Dance
            - Malmortius
            - Guardian Angel
            - Sterak's Gage
            - Sundered Sky
    Ap
        MagicPen
            - Void Staff
            - Bloodletter's Curse
        Burst
            - Stormsurge
            - Shadowflame
            - Lich Bane
            - Rabadon's Deathcap
        Mobility
            - Hextech Rocketbelt
        Survivability
            - Zhonya's Hourglass
            - Banshee's Veil
            - Cryptbloom
        AS
            - Nashor's Tooth
Mage
    AS
        - Nashor's Tooth
    Burst
        - Luden's Companion
        - Rabadon's Deathcap
        - Shadowflame
        - Stormsurge
        - Horizon Focus
    Survivability
        - Seraphin
        - Rod of Ages
        - Zhonya
        - Banshee
    MagicPen
        - Void Staff
    Poke
        - Blackfire Torch
        - Liandry
        - Morellonomicon
    CDR
        - Cosmic Drive
        - Malignance
Marksman
    Damage
        - The Collector
    AS
        - Static Shiv
        - Rapid Firecannon
        - Runaan's Hurricane
    Crit
        - Infinity Edge
        - Yun Tal Wildarrows
        - Collector
    Lifesteal
        - Bloodthirster
        - Blade of the Ruined King
    ArmorPen
        - Lord Dominik's Regards
        - Mortal Reminder
    Mobility
        - Phantom Dancer
    OnHit
        - Kraken Slayer
        - Guinsoo's Rageblade
        - Terminus
    Survivability
        - Guardian Angel
`

const getAllItems = (data) => {
    const items = [];

    const traverse = (obj) => {
        for (const key in obj) {
            if (Array.isArray(obj[key])) {
                // Si la valeur est une liste, on ajoute ses éléments
                items.push(...obj[key]);
            } else if (typeof obj[key] === "object") {
                // Si la valeur est un objet, on le parcourt récursivement
                traverse(obj[key]);
            }
        }
    };

    traverse(data);
    return items;
};

const allItems = getAllItems(items);
console.log(allItems);