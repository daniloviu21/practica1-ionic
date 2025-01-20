import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickersPage } from './pickers.page';

describe('PickersPage', () => {
  let component: PickersPage;
  let fixture: ComponentFixture<PickersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
