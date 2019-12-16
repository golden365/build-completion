import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocationsComponent } from './service-locations.component';

describe('ServiceLocationsComponent', () => {
  let component: ServiceLocationsComponent;
  let fixture: ComponentFixture<ServiceLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
