import { Component } from "../Component";
import {CharacterDetailComponent} from "./characterDetail/CharacterDetail.component";
import {CharacterStateComponent} from "./characterDetail/characterState.component";
import {ActionBarComponent} from "./characterDetail/ActionBar.component";

export class HUDComponent extends Component {

  private charactersDetails: CharacterDetailComponent[] | undefined;
  private characterState: CharacterStateComponent | undefined;
  private actionBar: ActionBarComponent | undefined;
  private charactersDetailsBox: HTMLDivElement;
  // private characterStateBox: HTMLDivElement;
  // private actionBarBox: HTMLDivElement;

  constructor(
  ) {
    super(document.createElement("div"), document.body);
    this.el.classList.add("HUD");
    this.charactersDetailsBox = document.createElement("div");
    // this.characterStateBox = document.createElement("div");
    // this.actionBarBox = document.createElement("div");
  }

  getCharactersDetails(): CharacterDetailComponent[] | undefined {
    return this.charactersDetails;
  }

  setCharactersDetails(value: CharacterDetailComponent[]) {
    this.charactersDetails = value;
    this.charactersDetailsBox.innerHTML = '';
    this.charactersDetailsBox.classList.add("charactersDetails");
    this.charactersDetailsBox.appendChild(this.charactersDetails[0].el);
    this.charactersDetailsBox.appendChild(this.charactersDetails[1].el);
    this.charactersDetailsBox.appendChild(this.charactersDetails[2].el);
    this.el.appendChild(this.charactersDetailsBox);
  }

  getCharacterState(): CharacterStateComponent | undefined {
    return this.characterState;
  }

  setCharacterState(value: CharacterStateComponent) {
    this.characterState = value;
    this.el.appendChild(this.characterState.el);
  }

  getActionBar(): ActionBarComponent | undefined {
    return this.actionBar;
  }

  setActionBar(value: ActionBarComponent) {
    this.actionBar = value;
    this.el.appendChild(this.actionBar.el);
  }
}
