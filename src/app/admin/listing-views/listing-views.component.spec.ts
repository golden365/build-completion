import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingViewsComponent } from './listing-views.component';

describe('ListingViewsComponent', () => {
  let component: ListingViewsComponent;
  let fixture: ComponentFixture<ListingViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
