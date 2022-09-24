import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanuncioComponent } from './addanuncio.component';

describe('AddanuncioComponent', () => {
  let component: AddanuncioComponent;
  let fixture: ComponentFixture<AddanuncioComponent>;

  beforeEach(async(() => {
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
