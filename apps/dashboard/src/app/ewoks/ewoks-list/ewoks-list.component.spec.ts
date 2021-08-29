import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoksListComponent } from './ewoks-list.component';

describe('EwoksListComponent', () => {
  let component: EwoksListComponent;
  let fixture: ComponentFixture<EwoksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwoksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
