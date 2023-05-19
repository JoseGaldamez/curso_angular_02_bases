import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DBZService {
  public characters: Character[] = [
    {
      uuid: uuid(),
      name: 'Krillin',
      power: 1000,
    },
  ];

  public addNewCharacter(character: Character) {
    const newCharacter = {
      ...character,
      uuid: uuid(),
    };
    this.characters.push(newCharacter);
  }

  public removeCharacter(character: Character) {
    this.characters = this.characters.filter(
      (characterItem) => characterItem.uuid !== character.uuid
    );
  }
}
