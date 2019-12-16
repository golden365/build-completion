import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedusersComponent } from './blockedusers.component';

describe('BlockedusersComponent', () => {
  let component: BlockedusersComponent;
  let fixture: ComponentFixture<BlockedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
