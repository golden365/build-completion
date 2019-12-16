import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSettingsEditComponent } from './site-settings-edit.component';

describe('SiteSettingsEditComponent', () => {
  let component: SiteSettingsEditComponent;
  let fixture: ComponentFixture<SiteSettingsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSettingsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
