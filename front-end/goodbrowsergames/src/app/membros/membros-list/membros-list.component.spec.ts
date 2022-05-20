import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosListComponent } from './membros-list.component';

describe('MembrosListComponent', () => {
  let component: MembrosListComponent;
  let fixture: ComponentFixture<MembrosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembrosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
