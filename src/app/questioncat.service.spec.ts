import { TestBed } from '@angular/core/testing';

import { QuestioncatService } from './questioncat.service';

describe('QuestioncatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestioncatService = TestBed.get(QuestioncatService);
    expect(service).toBeTruthy();
  });
});
