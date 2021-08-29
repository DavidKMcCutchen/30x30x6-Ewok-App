import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoksComponent } from './ewoks.component';

describe('EwoksComponent', () => {
  let component: EwoksComponent;
  let fixture: ComponentFixture<EwoksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwoksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
