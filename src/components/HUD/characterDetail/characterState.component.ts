import {Component} from "../../Component";
import {RpgEntity} from "../../../models/rpgEntity";

export class CharacterStateComponent extends Component {
    private character: RpgEntity;

    constructor(character: RpgEntity) {
        super(document.createElement("div"), document.querySelector("HUD")!);
        this.character = character;
        this.el.classList.add('character-state');

        let statsBox = this.createStatsBox();
        //RightSide
        let rightSideDiv = document.createElement('div');
        rightSideDiv.classList.add("right-side");
        let damagesBoxElement = this.createDamagesBox();
        let barsBox = this.createBarsBox();

        // add DOM content
        rightSideDiv.appendChild(damagesBoxElement);
        rightSideDiv.appendChild(barsBox);
        this.el.appendChild(statsBox);
        this.el.appendChild(rightSideDiv);
    }

    createStatsBox() {
        // StatsBox
        let statsBox = document.createElement('div');
        statsBox.classList.add('statsBox');
        let statStrength = document.createElement('p');
        let statAgility = document.createElement('p');
        let statIntel = document.createElement('p');
        statStrength.classList.add('stat');
        statStrength.innerHTML = `${this.character.getStrength()}`;
        statAgility.classList.add('stat');
        statAgility.innerHTML = `${this.character.getAgility()}`;
        statIntel.classList.add('stat');
        statIntel.innerHTML = `${this.character.getIntel()}`;
        statsBox.appendChild(statStrength);
        statsBox.appendChild(statAgility);
        statsBox.appendChild(statIntel);

        return statsBox;
    }

    createDamagesBox() {
        //Damages
        let damagesBoxElement = document.createElement('div');
        damagesBoxElement.classList.add('damages');
        let damageIcon = document.createElement('img');
        damageIcon.src = './assets/img/sword-wound.svg';
        let showDamages = document.createElement('p');
        showDamages.innerHTML = `min ${this.character.getDamageMin()} deg - max ${this.character.getDamageMax()} deg`
        damagesBoxElement.appendChild(damageIcon);

        return damagesBoxElement;
    }

    createBarsBox(){
        //Bars
        let barsBox = document.createElement('div');
        barsBox.classList.add('bars-box');
        let hpBar = document.createElement('div');
        let manaBar = document.createElement('div');
        hpBar.classList.add('bar');
        manaBar.classList.add('bar');
        barsBox.appendChild(hpBar);
        barsBox.appendChild(manaBar);

        return barsBox;
    }
}