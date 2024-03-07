import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdbacComponent } from './ddbac.component';

describe('DdbacComponent', () => {
  let component: DdbacComponent;
  let fixture: ComponentFixture<DdbacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdbacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdbacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
