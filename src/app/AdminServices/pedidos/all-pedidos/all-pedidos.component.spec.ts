import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPedidosComponent } from './all-pedidos.component';

describe('AllPedidosComponent', () => {
  let component: AllPedidosComponent;
  let fixture: ComponentFixture<AllPedidosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
