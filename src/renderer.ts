import "./styles/styles.scss";
import { StartComponent } from "./components/start/start.component";
import {Warrior} from "./models/heroes/Warrior";
import {Mage} from "./models/heroes/Mage";
import {Rogue} from "./models/heroes/Rogue";
import {CharacterDetailComponent} from "./components/HUD/characterDetail/CharacterDetail.component";
import {ActionBarComponent} from "./components/HUD/characterDetail/ActionBar.component";
import {CharacterStateComponent} from "./components/HUD/characterDetail/characterState.component";
import {HUDComponent} from "./components/HUD/hud.component";
new StartComponent("START");
let HUD = new HUDComponent();
let warrior = new Warrior('Jonnhy');
warrior.setArtwork('https://www.pngkey.com/png/full/151-1514744_image-dark-knight-aw-render-png-aigis-wiki.png');
let warriorDetail = new CharacterDetailComponent(warrior);
let mage = new Mage('Stalin');
let mageDetail = new CharacterDetailComponent(mage);
let rogue = new Rogue('Cassandre');
let rogueDetail = new CharacterDetailComponent(rogue);
let charactersDetails = [
    warriorDetail,
    mageDetail,
    rogueDetail
];
let actionBar = new ActionBarComponent();
let characterState = new CharacterStateComponent(warrior);
HUD.setCharactersDetails(charactersDetails);
HUD.setCharacterState(characterState);
HUD.setActionBar(actionBar);
HUD.render();
