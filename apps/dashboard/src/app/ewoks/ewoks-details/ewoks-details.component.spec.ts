import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoksDetailsComponent } from './ewoks-details.component';

describe('EwoksDetailsComponent', () => {
  let component: EwoksDetailsComponent;
  let fixture: ComponentFixture<EwoksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwoksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
