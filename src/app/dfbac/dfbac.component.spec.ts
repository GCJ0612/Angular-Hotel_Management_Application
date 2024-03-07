import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfbacComponent } from './dfbac.component';

describe('DfbacComponent', () => {
  let component: DfbacComponent;
  let fixture: ComponentFixture<DfbacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfbacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfbacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
