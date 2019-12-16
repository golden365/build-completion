import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcloseComponent } from './accountclose.component';

describe('AccountcloseComponent', () => {
  let component: AccountcloseComponent;
  let fixture: ComponentFixture<AccountcloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
