import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfbComponent } from './dfb.component';

describe('DfbComponent', () => {
  let component: DfbComponent;
  let fixture: ComponentFixture<DfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
