import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileActualiteComponent } from './file-actualite.component';

describe('FileActualiteComponent', () => {
  let component: FileActualiteComponent;
  let fixture: ComponentFixture<FileActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
