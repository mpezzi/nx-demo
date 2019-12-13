import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdsLayoutContentComponent } from './layout-content.component';

describe('LayoutContentComponent', () => {
  let component: AdsLayoutContentComponent;
  let fixture: ComponentFixture<AdsLayoutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsLayoutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
