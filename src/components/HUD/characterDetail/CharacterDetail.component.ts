import { Component } from "../../Component";
import {RpgEntity} from "../../../models/rpgEntity";


export class CharacterDetailComponent extends Component {
  readonly character: RpgEntity;
  private lifeBar: HTMLElement;
  private icon: HTMLImageElement;
  private manaBar: HTMLElement;

  constructor(character: RpgEntity) {
    super(document.createElement("div"), document.querySelector("HUD")!);
    this.character = character;
    this.el.classList.add(`characterDetail-${this.character.getName()}`);
    let barBox = document.createElement("div");
    barBox.classList.add('barBox');
    let heroName = document.createElement("h2");
    this.lifeBar = document.createElement("div");
    this.lifeBar.classList.add("lifebar");
    this.icon = document.createElement("img");
    this.icon.src = this.character.getUrlImg();
    this.manaBar = document.createElement("div");
    this.manaBar.classList.add("manabar");
    barBox.appendChild(heroName);
    barBox.appendChild(this.lifeBar);
    barBox.appendChild(this.manaBar);
    this.el.appendChild(barBox);
    this.el.appendChild(this.icon);
  }

  getCharacter(): RpgEntity {
    return this.character;
  }
}
