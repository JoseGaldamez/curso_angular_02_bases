import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'main-page-dbz',
  templateUrl: './main-page.component.html',
})
export class MainPageDBZ {
  constructor(private dbzService: DBZService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  newCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }

  removeCharacter(character: Character): void {
    this.dbzService.removeCharacter(character);
  }
}
