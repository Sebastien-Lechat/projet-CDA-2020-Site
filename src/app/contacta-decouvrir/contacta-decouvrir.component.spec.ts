import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaDecouvrirComponent } from './contacta-decouvrir.component';

describe('ContactaDecouvrirComponent', () => {
  let component: ContactaDecouvrirComponent;
  let fixture: ComponentFixture<ContactaDecouvrirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactaDecouvrirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaDecouvrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
