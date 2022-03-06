import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPublicacionComponent } from './registro-publicacion.component';

describe('RegistroPublicacionComponent', () => {
  let component: RegistroPublicacionComponent;
  let fixture: ComponentFixture<RegistroPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
