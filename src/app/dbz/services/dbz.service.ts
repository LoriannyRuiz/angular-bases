import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({

  providedIn: 'root'
})
export class DbzService {

  public Characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character:Character):void {

    const newCharacter: Character = {id: uuid(), ...character}

    this.Characters.push(newCharacter);
  }

  deleteCharacterById(id:string) {
    this.Characters = this.Characters.filter( character => character.id !== id);
  }

}
