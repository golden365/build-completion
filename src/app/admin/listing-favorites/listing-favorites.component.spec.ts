import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFavoritesComponent } from './listing-favorites.component';

describe('ListingFavoritesComponent', () => {
  let component: ListingFavoritesComponent;
  let fixture: ComponentFixture<ListingFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
