import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class SuccessDialogData {

  title: string;

  errorMessage: string;

}



@Component({
  selector: 'success-dialog-component',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})

export class SuccessDialogComponent  {

  constructor(public dialogRef: MatDialogRef<SuccessDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: SuccessDialogData) {}


}
