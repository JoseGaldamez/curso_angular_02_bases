import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDBZ } from './pages/main-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { DbzFormAddCharacterComponent } from './components/dbz-form-add-character/dbz-form-add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageDBZ,
    ListCharactersComponent,
    DbzFormAddCharacterComponent,
  ],
  exports: [MainPageDBZ],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
