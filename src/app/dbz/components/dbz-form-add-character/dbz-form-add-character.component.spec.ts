import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzFormAddCharacterComponent } from './dbz-form-add-character.component';

describe('DbzFormAddCharacterComponent', () => {
  let component: DbzFormAddCharacterComponent;
  let fixture: ComponentFixture<DbzFormAddCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzFormAddCharacterComponent]
    });
    fixture = TestBed.createComponent(DbzFormAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
