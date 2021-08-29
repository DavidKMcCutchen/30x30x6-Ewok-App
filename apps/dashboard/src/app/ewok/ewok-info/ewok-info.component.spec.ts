import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwokInfoComponent } from './ewok-info.component';

describe('EwokInfoComponent', () => {
  let component: EwokInfoComponent;
  let fixture: ComponentFixture<EwokInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwokInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwokInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
