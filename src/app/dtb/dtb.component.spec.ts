import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtbComponent } from './dtb.component';

describe('DtbComponent', () => {
  let component: DtbComponent;
  let fixture: ComponentFixture<DtbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
