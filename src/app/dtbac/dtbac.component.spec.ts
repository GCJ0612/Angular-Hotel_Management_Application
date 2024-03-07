import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtbacComponent } from './dtbac.component';

describe('DtbacComponent', () => {
  let component: DtbacComponent;
  let fixture: ComponentFixture<DtbacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtbacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtbacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
