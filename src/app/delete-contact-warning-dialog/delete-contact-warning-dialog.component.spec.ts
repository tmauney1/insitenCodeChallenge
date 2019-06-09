import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactWarningDialogComponent } from './delete-contact-warning-dialog.component';

describe('DeleteContactWarningDialogComponent', () => {
  let component: DeleteContactWarningDialogComponent;
  let fixture: ComponentFixture<DeleteContactWarningDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteContactWarningDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContactWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
