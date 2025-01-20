import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextAreasPage } from './text-areas.page';

describe('TextAreasPage', () => {
  let component: TextAreasPage;
  let fixture: ComponentFixture<TextAreasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
