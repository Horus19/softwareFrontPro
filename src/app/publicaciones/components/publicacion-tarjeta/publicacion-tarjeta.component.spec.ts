import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionTarjetaComponent } from './publicacion-tarjeta.component';

describe('PublicacionTarjetaComponent', () => {
  let component: PublicacionTarjetaComponent;
  let fixture: ComponentFixture<PublicacionTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
