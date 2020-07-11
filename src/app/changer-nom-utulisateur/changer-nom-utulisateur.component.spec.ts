import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerNomUtulisateurComponent } from './changer-nom-utulisateur.component';

describe('ChangerNomUtulisateurComponent', () => {
  let component: ChangerNomUtulisateurComponent;
  let fixture: ComponentFixture<ChangerNomUtulisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerNomUtulisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerNomUtulisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
