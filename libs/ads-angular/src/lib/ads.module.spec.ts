import { async, TestBed } from '@angular/core/testing';
import { AdsModule } from './ads.module';

describe('AdsAngularModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdsModule).toBeDefined();
  });
});
