import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationspoliciesComponent } from './cancellationspolicies.component';

describe('CancellationspoliciesComponent', () => {
  let component: CancellationspoliciesComponent;
  let fixture: ComponentFixture<CancellationspoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationspoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationspoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
