export abstract class RpgEntity {
  getArtwork(): string | null {
    return this._artwork;
  }

  setArtwork(value: string | null) {
    this._artwork = value;
  }
  protected name: string;
  protected job: string;
  protected urlImg: string;
  protected sprites: string[];
  private _artwork: string | null;

  protected strength: number = 0;
  protected agility: number = 0;
  protected intel: number = 0;
  protected strengthLvl: number;
  protected agilityLvl: number;
  protected intelLvl: number;

  protected firstCarac: number = 0;

  protected level: number;
  protected hp: number;
  protected hpMax: number = 0;
  protected mana: number;
  protected manaMax: number = 0;
  protected def: number = 0.0;
  protected scoreCritStrike: number;
  protected critDamage: number;
  protected damageMin: number = 0;
  protected damageMax: number = 0;
  //TODO protected ability : Ability;
  // protected abilityRatio: number;
  // protected turn: number = 0;

  protected constructor(
    name: string,
    strength: number,
    agility: number,
    intel: number,
    strengthLvl: number,
    agilityLvl: number,
    intelLvl: number,
    job: string,
    urlImg: string,
    sprites: string[]
  ) {
    this.level = 1;
    this.scoreCritStrike = 12;
    this.critDamage = 150;
    this.name = name;
    this.setStrength(strength);
    this.hp = strength * 19;
    this.setIntel(intel);
    this.mana = intel * 17;
    this.setAgility(agility);
    this.intelLvl = intelLvl;
    this.strengthLvl = strengthLvl;
    this.agilityLvl = agilityLvl;
    this.job = job;
    this.urlImg = urlImg;
    this.sprites = sprites;
    this._artwork = null;
  }

  public getSprites(): string[] {
    return this.sprites;
  }

  public setSprites(sprites: string[]) {
    this.sprites = sprites;
  }

  public setDamageAndCriticalStrike(carac: number) {
    this.firstCarac = carac;
    this.damageMin = Math.round(carac * 1.2);
    this.damageMax = Math.round(carac * 1.4);
    this.scoreCritStrike += carac * 0.08;
  }

  //TODO setlevel / lvlup /

  // name
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  // class
  getClass() {
    return this.job;
  }

  setClass(job: string) {
    this.job = job;
  }

  // urlImg
  getUrlImg() {
    return this.urlImg;
  }

  setUrlImg(urlImg: string) {
    this.urlImg = urlImg;
  }

  // strength
  public getStrength() {
    return this.strength;
  }
  public setStrength(strength: number) {
    if (this.strength && this.firstCarac) {
      if (this.strength === this.firstCarac) {
        this.strength = strength;
        this.hpMax = strength * 19;
        this.firstCarac = this.strength;
      } else {
        this.strength = strength;
        this.hpMax = strength * 19;
      }
    } else {
      this.strength = strength;
      this.hpMax = strength * 19;
    }

    return this;
  }

  // strengthLvl
  public getStrengthLvl() {
    return this.strengthLvl;
  }
  public setStrengthLvlStrength(strengthLvl: number) {
    this.strengthLvl = strengthLvl;
  }

  // agility
  public getAgility() {
    return this.agility;
  }
  public setAgility(agility: number) {
    if (this.agility && this.firstCarac) {
      if (this.agility === this.firstCarac) {
        this.agility = agility;
        this.def = agility / 6;
        this.firstCarac = this.agility;
      } else {
        this.agility = agility;
        this.def = agility / 6;
      }
    } else {
      this.agility = agility;
      this.def = agility / 6;
    }
    return this;
  }

  // agilityLvl
  public getAgilityLvl() {
    return this.agilityLvl;
  }
  public setAgilityLvl(agilityLvl: number) {
    this.agilityLvl = agilityLvl;
  }

  // intel
  public getIntel() {
    return this.intel;
  }
  public setIntel(intel: number) {
    if (this.intel && this.firstCarac) {
      if (this.intel === this.firstCarac) {
        this.intel = intel;
        this.manaMax = intel * 17;
        this.firstCarac = this.intel;
      } else {
        this.intel = intel;
        this.manaMax = intel * 17;
      }
    } else {
      this.intel = intel;
      this.manaMax = intel * 17;
    }
    return this;
  }

  // intelLvl
  public getIntelLvl() {
    return this.intelLvl;
  }
  public setIntelLvl(intelLvl: number) {
    this.intelLvl = intelLvl;
  }

  // level
  public getLevel() {
    return this.level;
  }
  public setLevel(level: number) {
    this.level = level;
  }

  // hp
  public getHp() {
    return this.hp;
  }
  public setHp(hp: number) {
    this.hp = hp;
  }

  // hpMax
  public getHpMax() {
    return this.hpMax;
  }
  public setHpMax(hpMax: number) {
    this.hpMax = hpMax;
  }

  // mana
  public getMana() {
    return this.mana;
  }
  public setMana(mana: number) {
    this.mana = mana;
  }

  // manaMax
  public getManaMax() {
    return this.manaMax;
  }
  public setManaMax(manaMax: number) {
    this.manaMax = manaMax;
  }

  // def
  public getDef() {
    return this.def;
  }
  public setDef(def: number) {
    this.def = def;
  }

  // scoreCritStrike
  public getScoreCritStrike() {
    return this.scoreCritStrike;
  }
  public setScoreCritStrike(scoreCritStrike: number) {
    this.scoreCritStrike = scoreCritStrike;
  }

  // critDamage
  public getCritDamage() {
    return this.critDamage;
  }
  public setCritDamage(critDamage: number) {
    this.critDamage = critDamage;
  }

  // damageMin
  public getDamageMin() {
    return this.damageMin;
  }
  public setDamageMin(damageMin: number) {
    this.damageMin = damageMin;
  }

  // damageMax
  public getDamageMax() {
    return this.damageMax;
  }
  public setDamageMax(damageMax: number) {
    this.damageMax = damageMax;
  }
}
