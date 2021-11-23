import { TestBed } from '@angular/core/testing';

import { GraphicsCardService } from './graphics-card.service';

describe('GraphicsCardService', () => {
  let service: GraphicsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
