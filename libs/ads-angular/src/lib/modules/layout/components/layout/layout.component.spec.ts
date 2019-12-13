import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdsLayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: AdsLayoutComponent;
  let fixture: ComponentFixture<AdsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
