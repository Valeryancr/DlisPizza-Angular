import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddanuncioComponent } from './addanuncio.component';

describe('AddanuncioComponent', () => {
  let component: AddanuncioComponent;
  let fixture: ComponentFixture<AddanuncioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddanuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
