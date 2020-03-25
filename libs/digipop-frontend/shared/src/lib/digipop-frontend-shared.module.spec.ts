import { async, TestBed } from '@angular/core/testing';
import { DigipopFrontendSharedModule } from './digipop-frontend-shared.module';

describe('DigipopFrontendSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DigipopFrontendSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DigipopFrontendSharedModule).toBeDefined();
  });
});
