import {RpgEntity} from "../rpgEntity";

export class Warrior extends RpgEntity {
    constructor(name: string, urlImg: string= './img/viking-head.svg', sprites:string[] = []) {
        super(name, 24, 12, 14,5, 1, 2, 'Warrior', urlImg, sprites);
        this.setDamageAndCriticalStrike(this.strength);
        //TODO this.abilityRatio = 1.8;
        //ability = new Ability(this.firstCarac * this.abilityRatio, 'Heurtoir', 150);
        //this.setAbility(ability);
    }

}