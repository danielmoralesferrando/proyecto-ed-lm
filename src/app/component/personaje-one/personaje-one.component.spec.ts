import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeONEComponent } from './personaje-one.component';

describe('PersonajeONEComponent', () => {
  let component: PersonajeONEComponent;
  let fixture: ComponentFixture<PersonajeONEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeONEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajeONEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
