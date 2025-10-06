import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasAgenda } from './citas-agenda';

describe('CitasAgenda', () => {
  let component: CitasAgenda;
  let fixture: ComponentFixture<CitasAgenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasAgenda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasAgenda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
