import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemGroupsPage } from './item-groups.page';

describe('ItemGroupsPage', () => {
  let component: ItemGroupsPage;
  let fixture: ComponentFixture<ItemGroupsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
