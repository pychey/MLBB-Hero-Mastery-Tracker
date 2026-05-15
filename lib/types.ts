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
  HolyCrystal = "Holy Crystal",
  LightningTruncheon = "Lightning Truncheon",
  GlacialWand = "Glacial Wand",
  DivinineGlaive = "Divine Glaive",
  SpellBlade = "Spell Blade",
  FleetingTime = "Fleeting Time",
  CaduceusScepter = "Caduceus Scepter",
  StarliumScythe = "Starlium Scythe",
  IceQueenWand = "Ice Queen Wand",
  TempestTrident = "Tempest Trident",
  BloodWings = "Blood Wings",
  ConcentrativeIceStaff = "Concentrative Ice Staff",
  ShadowTwinBlades = "Shadow Twin Blades",
  GeniusWand = "Genius Wand",
  NecklaceOfDurance = "Necklace of Durance",
  CursedHelmet = "Cursed Helmet",
  BladeDespair = "Blade of Despair",
  BladeHeptaseas = "Blade of the Heptaseas",
  BerserkerFury = "Berserker's Fury",
  Windtalker = "Windtalker",
  HaasClaws = "Haas's Claws",
  SkullCrusher = "Skull Crusher",
  MaleficRoar = "Malefic Roar",
  BruteForceBreastplate = "Brute Force Breastplate",
  SeaHalberd = "Sea Halberd",
  SkyPiercer = "Sky Piercer",
  GoldenStaff = "Golden Staff",
  ThunderBelt = "Thunder Belt",
  HunterStrike = "Hunter Strike",
  CorrosionScythe = "Corrosion Scythe",
  EndlessBattle = "Endless Battle",
  DemonHunterSword = "Demon Hunter Sword",
  RoseGoldMeteor = "Rose Gold Meteor",
  WarAxe = "War Axe",
  QuakeRumbler = "Quake Rumbler",
  DominanceIce = "Dominance Ice",
  Immortality = "Immortality",
  AthenaShield = "Athena's Shield",
  AntiqueCuirass = "Antique Cuirass",
  RadiantArmor = "Radiant Armor",
  TwilightArmor = "Twilight Armor",
  BladeArmor = "Blade Armor",
  Oracle = "Oracle",
  WinterTruncheon = "Winter Truncheon",
  QueensWings = "Queen's Wings",
  MoltenEssence = "Molten Essence",
  WindOfNature = "Wind of Nature",
  RapidBoots = "Rapid Boots",
  DemonShoes = "Demon Shoes",
  ArcaneBoots = "Arcane Boots",
  ThunderBoots = "Thunder Boots",
  MagicBoots = "Magic Boots",
  ToughBoots = "Tough Boots",
  WarBoots = "War Boots",
}

export type HeroProgressRecord = {
  id: string
  userId: string
  heroId: number
  progress: HeroProgress
  roles: HeroRole[]
  items: MLBBItem[]
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