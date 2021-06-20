import {RpgEntity} from "../rpgEntity";

export class Rogue extends RpgEntity {
    constructor(name: string, urlImg: string= './img/hooded-assassin.svg', sprites:string[] = []) {
        super(name, 13, 26, 11,2, 5, 1, 'Rogue', urlImg, sprites);
        this.setCritDamage(175);
        this.setDamageAndCriticalStrike(this.agility);
        //TODO this.abilityRatio = 1.9;
        //ability = new Ability(this.firstCarac * this.abilityRatio, 'Embuscade', 160);
        //this.setAbility(ability);
    }
}