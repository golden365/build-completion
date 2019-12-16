import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonuserComponent } from './commonuser.component';

describe('CommonuserComponent', () => {
  let component: CommonuserComponent;
  let fixture: ComponentFixture<CommonuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
