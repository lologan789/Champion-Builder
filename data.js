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
            
        Range
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

        Range
            - Urgot
            - Gnar

Marksman
    AD
        Melee
            - Yone 
            - Yasuo
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
`
const Toplaner =
`
Tank
    Ap
        Melee
            - Maokai
            - Malphite
            - Ornn
            - Cho'Gath
    Ad
        Melee
            - Sion
            - K'Sante
            - Illaoi
Bruiser
    Ap
        Melee
            - Mordekaiser
            - Rumble
            - Singed
            - Gwen
    Ad
        Melee
            - Darius
            - Garen
            - Yorick
            - Sett
            - Jax
        Ranged
            - Urgot
            - Gnar
Marksman
    Ad
        Ranged
            - Quinn
    Ap
        Ranged
            - Teemo
            - Kayle
Mage
    Ap
        Melee
            - Gragas
        Ranged
            - Kennen
            - Vladimir
            - Heimerdinger
`

const Jungler =
`
Tank
    Ap
        Melee
            - Zac
            - Sejuani
            - Amumu
    Ad
        Melee
            - Udyr
Bruiser
    Ap
        Melee
            - Shyvana
            - Diana
    Ad
        Melee
            - Wukong
            - Lee Sin
            - Xin Zhao
            - Vi
            - Briar
Marksman
    Ad
        Melee
            - Belveth
            - Master Yi
        Ranged
            - Kindred
Mage
    Ap
        Melee
            - Nunu
            - Ekko
        Ranged
            - Fiddlesticks
            - Karthus
            - Lillia
Assassin
    Ad
        Melee
            - Kha'Zix
            - Rengar
            - Shaco
        Ranged
            - Graves
    Ap
        Melee
            - Evelynn
Enchanter
    Ap
        Ranged
            - Ivern
`

const Midlaner =
`
Tank
    Ap
        Melee
            - Galio
Bruiser
    Ap
        Melee
            - Sylas
            - Kassadin
        Range
            - Cassiopeia
    Ad
        Melee
            - Yasuo
            - Yone
Marksman
    Ad
        Ranged
            - Akshan
    Ap
        Ranged
            - Twisted Fate
Mage
    Ap
        Ranged
            - Ahri
            - Anivia
            - Viktor
            - Syndra
Assassin
    Ad
        Melee
            - Zed
            - Talon
    Ap
        Melee
            - Fizz
            - Katarina
            - Akali
        Ranged
            - LeBlanc
`

const Botlaner =
`
Marksman
    Ad
        Ranged
            - Jinx
            - Ashe
            - Miss Fortune
            - Caitlyn
            - Tristana
    Ap
        Ranged
            - Kai'Sa
            - Varus
            - Kog'Maw
`

const Support =
`
Tank
    Ap
        Melee
            - Tahm Kench
            - Leona
            - Taric
            - Braum
Marksman
    Ad
        Ranged
            - Senna
Mage
    Ap
        Ranged
            - Velkoz
            - Zyra
            - Brand
            - Xerath
Assassin
    Ad
        Melee
            - Pyke
            - Pantheon
Enchanter
    Ap
        Ranged
            - Lulu
            - Janna
            - Nami
            - Soraka
            - Seraphine
`
const items = 
`
Tank
    HP
        - HearthSteel
        - Warmog
    Armor
        - Thornmail
        - Sunfire
        - Randuin
    MR
        - Spirit Visage
        - Abyssal Mask
        - Force de la nature
Bruiser
    AD
        HP
            - Sterak Gage
            - Black Cleaver
        Sustain
            - Sundered Sky
            - Voracious Hydra
            - Guardian Angel
            - Death's Dance
            - Malmortius
        Damage
            - Trinity
            - Stridebreaker
        LifeSteal
            - Blade of the Ruined King

    AP
        HP
            - Rylai
            - Liandry
        Sustain
            - Riftmaker
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
Assassin
    Ad
        Lethality
            - Duskblade
            - Edge of Night
            - Collector
        Mobility
            - Youmuu
            - Opportunity
        ArmorPen
            - Serylda
    Ap
        MagicPen
            - Void Staff
            - Bloodletter's Curse
        Burst
            - Stormsurge
            - Shadowflame
            - Licthbane
        Mobility
            - Rocketbelt
Mage
    AS
        - Nashor's Tooth
    Burst
        - Luden Companion
    Sustain
        - Seraphin
        - Rod of Ages
        - Zhonya
        - Banshee
    MagicPen
        - Void Staff
    Poke
        - Blackfire Torch
        - Liandry
    CDR
        - Cosmic Drive
        - Malignance
Marksman
    AS
        - Static Shiv
        - Rapid Firecannon
        - Runaan's Hurricane
    Crit
        - Infinity Edge
        - Yun Tai
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
`