import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxsPage } from './checkboxs.page';

describe('CheckboxsPage', () => {
  let component: CheckboxsPage;
  let fixture: ComponentFixture<CheckboxsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
