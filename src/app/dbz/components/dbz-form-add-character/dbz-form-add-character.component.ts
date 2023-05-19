import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form-add-character',
  templateUrl: './dbz-form-add-character.component.html',
  styleUrls: ['./dbz-form-add-character.component.css'],
})
export class DbzFormAddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (
      this.newCharacter.name.trim().length === 0 ||
      this.newCharacter.power < 0
    )
      return;

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
