import { Component } from "../Component";

export class HUD extends Component {
  protected charactersDetails: any[];
  protected characterState: any;
  protected actionBar: any;

  constructor(
    el = document.createElement("div"),
    characters: any,
    characterDetail: any,
    actionBar: any
  ) {
    super(el, document.body);
    this.charactersDetails = characters;
    this.characterState = characterDetail;
    this.actionBar = actionBar;
  }
}
