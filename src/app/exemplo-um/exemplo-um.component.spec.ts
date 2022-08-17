import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploUmComponent } from './exemplo-um.component';

describe('ExemploUmComponent', () => {
  let component: ExemploUmComponent;
  let fixture: ComponentFixture<ExemploUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
