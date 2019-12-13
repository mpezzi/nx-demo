import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdsLayoutAsideComponent } from './layout-aside.component';

describe('LayoutAsideComponent', () => {
  let component: AdsLayoutAsideComponent;
  let fixture: ComponentFixture<AdsLayoutAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsLayoutAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLayoutAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
