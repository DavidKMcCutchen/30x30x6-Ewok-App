import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwokComponent } from './ewok.component';

describe('EwokComponent', () => {
  let component: EwokComponent;
  let fixture: ComponentFixture<EwokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
