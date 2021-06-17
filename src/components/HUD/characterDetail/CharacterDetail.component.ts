import { Component } from "../../Component";

export class CharacterDetail extends Component {
  private character: RpgEntity;
  private lifeBar: HTMLElement;
  private icon: HTMLImageElement;
  private manaBar: HTMLElement;

  constructor(character: RpgEntity) {
    super(document.createElement("div"), document.querySelector("HUD")!);
    this.character = character;
    this.lifeBar = document.createElement("div");
    this.lifeBar.classList.add("lifebar");
    this.icon = document.createElement("img");
    this.icon.src = character.getUrlImg();
    this.manaBar = document.createElement("div");
    this.manaBar.classList.add("manabar");
  }

  getCharacter(): RpgEntity {
    return this.character;
  }
}
