import { TestBed, inject } from '@angular/core/testing';

import { RecursosService } from './recursos.service';

describe('RecursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecursosService]
    });
  });

  it('should be created', inject([RecursosService], (service: RecursosService) => {
    expect(service).toBeTruthy();
  }));
});
