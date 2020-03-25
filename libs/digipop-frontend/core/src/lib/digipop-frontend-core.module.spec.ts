import { async, TestBed } from '@angular/core/testing';
import { DigipopFrontendCoreModule } from './digipop-frontend-core.module';

describe('DigipopFrontendCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DigipopFrontendCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DigipopFrontendCoreModule).toBeDefined();
  });
});
