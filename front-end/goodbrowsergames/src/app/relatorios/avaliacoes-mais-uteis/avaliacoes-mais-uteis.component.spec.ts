import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesMaisUteisComponent } from './avaliacoes-mais-uteis.component';

describe('AvaliacoesMaisUteisComponent', () => {
  let component: AvaliacoesMaisUteisComponent;
  let fixture: ComponentFixture<AvaliacoesMaisUteisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesMaisUteisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacoesMaisUteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
