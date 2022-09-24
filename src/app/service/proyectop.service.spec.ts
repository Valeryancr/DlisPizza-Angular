import { TestBed } from '@angular/core/testing';

import { ProyectopService } from './proyectop.service';

describe('ProyectopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectopService = TestBed.get(ProyectopService);
    expect(service).toBeTruthy();
  });
});
