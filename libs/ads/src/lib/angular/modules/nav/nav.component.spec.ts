import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: AdsNavComponent;
  let fixture: ComponentFixture<AdsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
