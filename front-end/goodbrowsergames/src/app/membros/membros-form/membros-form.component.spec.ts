import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosFormComponent } from './membros-form.component';

describe('MembrosFormComponent', () => {
  let component: MembrosFormComponent;
  let fixture: ComponentFixture<MembrosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembrosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
