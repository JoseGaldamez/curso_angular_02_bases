import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css'],
})
export class ListCharactersComponent {
  @Input()
  public charactersList: Character[] = [];

  @Output()
  public onRemoveCharacter: EventEmitter<Character> = new EventEmitter();

  removeCharacter(character: Character): void {
    this.onRemoveCharacter.emit(character);
    // this.charactersList.splice(index, 1);
  }
}
