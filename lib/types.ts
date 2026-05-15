export enum HeroProgress {
  Pending = "Pending",
  Progressing = "Progressing",
  Understood = "Understood",
  Mastered = "Mastered",
}

export enum HeroRole {
  Gold = "Gold",
  Exp = "Exp",
  Mid = "Mid",
  Jungle = "Jungle",
  Roam = "Roam",
}

export enum ComplexityLevel {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export enum EmblemsRole {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}

export enum EmblemTalent1 {
  Thrill = "Thrill",
  Vitality = "Vitality",
  Persistence = "Persistence",
  Agility = "Agility",
  Inspire = "Inspire",
  Briggandine = "Briggandine",
}

export enum EmblemTalent2 {
  Swift = "Swift",
  Tenacity = "Tenacity",
  Wilderness = "Wilderness Blessing",
  Seasoned = "Seasoned Hunter",
  Rupture = "Rupture",
  Focusing = "Focusing Mark",
  Paralysis = "Paralysis",
  Selfless = "Selfless",
}

export enum EmblemCoreTalent {
  QuantumCharge = "Quantum Charge",
  WarCry = "War Cry",
  KillingSpree = "Killing Spree",
  Lethal = "Lethal Tempo",
  Triumph = "Triumph",
  Vengeance = "Vengeance",
  Brave = "Brave Smite",
  Oppressor = "Oppressor",
  MasterAssassin = "Master Assassin",
  Bargain = "Bargain Hunter",
  PinPoint = "Pin-Point Marker",
  LifeDrain = "Life Drain",
  Eclipse = "Eclipse",
  FrostShield = "Frost Shield",
  IcyVeins = "Icy Veins",
  MysticalBoon = "Mystical Boon",
  AgonyMark = "Agony Mark",
}

export enum BattleSpell {
  Flicker = "Flicker",
  Arrival = "Arrival",
  Retribution = "Retribution",
  Inspire = "Inspire",
  Aegis = "Aegis",
  Purify = "Purify",
  Flameshot = "Flameshot",
  Execute = "Execute",
  Vengeance = "Vengeance",
  Sprint = "Sprint",
  Revitalize = "Revitalize",
  Petrify = "Petrify",
  Weaken = "Weaken",
  Stun = "Stun",
}

export enum MLBBItem {
  QueensWings = "Queen's Wings",
  AntiqueCuirass = "Antique Cuirass",
  AthenaShield = "Athena's Shield",
  BladeArmor = "Blade Armor",
  BruteForceBreastplate = "Brute Force Breastplate",
  CursedHelmet = "Cursed Helmet",
  DominanceIce = "Dominance Ice",
  GuardianHelmet = "Guardian Helmet",
  Immortality = "Immortality",
  Oracle = "Oracle",
  RadiantArmor = "Radiant Armor",
  ThunderBelt = "Thunder Belt",
  TwilightArmor = "Twilight Armor",
  HolyCrystal = "Holy Crystal",
  BloodWings = "Blood Wings",
  ClockOfDestiny = "Clock of Destiny",
  ConcentratedEnergy = "Concentrated Energy",
  DivinineGlaive = "Divine Glaive",
  EnchantedTalisman = "Enchanted Talisman",
  FeatherOfHeaven = "Feather of Heaven",
  FleetingTime = "Fleeting Time",
  GeniusWand = "Genius Wand",
  GlowingWand = "Glowing Wand",
  IceQueenWand = "Ice Queen Wand",
  LightningTruncheon = "Lightning Truncheon",
  NecklaceOfDurance = "Necklace of Durance",
  ShadowTwinblades = "Shadow Twinblades",
  StarliumScythe = "Starlium Scythe",
  WishingLantern = "Wishing Lantern",
  WinterCrown = "Winter Crown",
  BerserkerFury = "Berserker's Fury",
  BladeDespair = "Blade of Despair",
  CorrosionScythe = "Corrosion Scythe",
  DemonHunterSword = "Demon Hunter Sword",
  EndlessBattle = "Endless Battle",
  GoldenStaff = "Golden Staff",
  GreatDragonSpear = "Great Dragon Spear",
  HaasClaws = "Haas' Claws",
  HunterStrike = "Hunter Strike",
  MaleficGun = "Malefic Gun",
  MaleficRoar = "Malefic Roar",
  RoseGoldMeteor = "Rose Gold Meteor",
  SeaHalberd = "Sea Halberd",
  SkyPiercer = "Sky Piercer",
  WarAxe = "War Axe",
  WindOfNature = "Wind of Nature",
  Windtalker = "Windtalker",
  ArcaneBoots = "Arcane Boots",
  DemonShoes = "Demon Shoes",
  MagicShoes = "Magic Shoes",
  RapidBoots = "Rapid Boots",
  ToughBoots = "Tough Boots",
  WarriorBoots = "Warrior Boots",
  SwiftBoots = "Swift Boots",
  Conceal = "Conceal",
  DireHit = "Dire Hit",
  Encourage = "Encourage",
  Favor = "Favor",
  FlaskOfTheOasis = "Flask of the Oasis",
  FlameRetribution = "Flame Retribution",
  IceRetribution = "Ice Retribution",
  BloodyRetribution = "Bloody Retribution",
}

export const ITEM_CATEGORIES: { label: string; items: MLBBItem[] }[] = [
  {
    label: "Defense",
    items: [
      MLBBItem.QueensWings,
      MLBBItem.AntiqueCuirass,
      MLBBItem.AthenaShield,
      MLBBItem.BladeArmor,
      MLBBItem.BruteForceBreastplate,
      MLBBItem.CursedHelmet,
      MLBBItem.DominanceIce,
      MLBBItem.GuardianHelmet,
      MLBBItem.Immortality,
      MLBBItem.Oracle,
      MLBBItem.RadiantArmor,
      MLBBItem.ThunderBelt,
      MLBBItem.TwilightArmor,
    ],
  },
  {
    label: "Magic",
    items: [
      MLBBItem.HolyCrystal,
      MLBBItem.BloodWings,
      MLBBItem.ClockOfDestiny,
      MLBBItem.ConcentratedEnergy,
      MLBBItem.DivinineGlaive,
      MLBBItem.EnchantedTalisman,
      MLBBItem.FeatherOfHeaven,
      MLBBItem.FleetingTime,
      MLBBItem.GeniusWand,
      MLBBItem.GlowingWand,
      MLBBItem.IceQueenWand,
      MLBBItem.LightningTruncheon,
      MLBBItem.NecklaceOfDurance,
      MLBBItem.ShadowTwinblades,
      MLBBItem.StarliumScythe,
      MLBBItem.WishingLantern,
      MLBBItem.WinterCrown,
    ],
  },
  {
    label: "Attack",
    items: [
      MLBBItem.BerserkerFury,
      MLBBItem.BladeDespair,
      MLBBItem.CorrosionScythe,
      MLBBItem.DemonHunterSword,
      MLBBItem.EndlessBattle,
      MLBBItem.GoldenStaff,
      MLBBItem.GreatDragonSpear,
      MLBBItem.HaasClaws,
      MLBBItem.HunterStrike,
      MLBBItem.MaleficGun,
      MLBBItem.MaleficRoar,
      MLBBItem.RoseGoldMeteor,
      MLBBItem.SeaHalberd,
      MLBBItem.SkyPiercer,
      MLBBItem.WarAxe,
      MLBBItem.WindOfNature,
      MLBBItem.Windtalker,
    ],
  },
  {
    label: "Boots",
    items: [
      MLBBItem.ArcaneBoots,
      MLBBItem.DemonShoes,
      MLBBItem.MagicShoes,
      MLBBItem.RapidBoots,
      MLBBItem.ToughBoots,
      MLBBItem.WarriorBoots,
      MLBBItem.SwiftBoots,
    ],
  },
  {
    label: "Roam",
    items: [
      MLBBItem.Conceal,
      MLBBItem.DireHit,
      MLBBItem.Encourage,
      MLBBItem.Favor,
      MLBBItem.FlaskOfTheOasis,
    ],
  },
  {
    label: "Jungling",
    items: [
      MLBBItem.FlameRetribution,
      MLBBItem.IceRetribution,
      MLBBItem.BloodyRetribution,
    ],
  },
]

export type HeroProgressRecord = {
  id: string
  userId: string
  heroId: number
  progress: HeroProgress
  roles: HeroRole[]
  coreItems: MLBBItem[]
  optionalItems: MLBBItem[]
  emblemRole: EmblemsRole | null
  emblemTalent1: EmblemTalent1 | null
  emblemTalent2: EmblemTalent2 | null
  emblemCoreTalent: EmblemCoreTalent | null
  skillCombo: string | null
  firstSkillUpgrade: string | null
  skillToMax: string | null
  specialPassive: string | null
  complexityLevel: ComplexityLevel | null
  spell: BattleSpell[]
  powerSpike: string | null
  counterWho: string | null
  whoCounter: string | null
}

export type HeroWithProgress = {
  id: number
  name: string
  heroProgress: HeroProgressRecord | null
}