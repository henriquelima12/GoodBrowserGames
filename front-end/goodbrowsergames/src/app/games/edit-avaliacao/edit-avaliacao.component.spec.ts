import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvaliacaoComponent } from './edit-avaliacao.component';

describe('EditAvaliacaoComponent', () => {
  let component: EditAvaliacaoComponent;
  let fixture: ComponentFixture<EditAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
