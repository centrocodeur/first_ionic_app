import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsInstantPage } from './details-instant.page';

describe('DetailsInstantPage', () => {
  let component: DetailsInstantPage;
  let fixture: ComponentFixture<DetailsInstantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInstantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
