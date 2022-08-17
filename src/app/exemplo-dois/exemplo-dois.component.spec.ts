import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploDoisComponent } from './exemplo-dois.component';

describe('ExemploDoisComponent', () => {
  let component: ExemploDoisComponent;
  let fixture: ComponentFixture<ExemploDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
