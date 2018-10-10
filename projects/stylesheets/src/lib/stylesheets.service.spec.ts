import { TestBed } from '@angular/core/testing';

import { StylesheetsService } from './stylesheets.service';

describe('StylesheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylesheetsService = TestBed.get(StylesheetsService);
    expect(service).toBeTruthy();
  });
});
