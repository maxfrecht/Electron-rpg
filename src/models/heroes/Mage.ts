import {RpgEntity} from "../rpgEntity";

export class Mage extends RpgEntity {
    constructor(name : string, urlImg : string){
        super(name, 13, 8, 36, 2, 1, 6, "Mage", urlImg);
        this.setDamageAndCriticalStrike(this.intel);
        // this.abilityRatio = 2;
        // ability = new Ability('Feu', 150 , this.firstCarac * this.abilityRatio);
        // this.setAbility(ability);
    }
}