import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdbComponent } from './edb.component';

describe('EdbComponent', () => {
  let component: EdbComponent;
  let fixture: ComponentFixture<EdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
