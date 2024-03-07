import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferenceformComponent } from './templatereferenceform.component';

describe('TemplatereferenceformComponent', () => {
  let component: TemplatereferenceformComponent;
  let fixture: ComponentFixture<TemplatereferenceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatereferenceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatereferenceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
