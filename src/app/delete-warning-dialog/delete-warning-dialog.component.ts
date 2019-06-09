import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Target } from '../models/target';
import { TargetService } from '../target.service';

export class DeleteWarningDialogData {

  title: string;

  errorMessage: string;

  targets: Target[];

  target: Target;

}



@Component({
  selector: 'app-delete-warning-dialog',
  templateUrl: './delete-warning-dialog.component.html',
  styleUrls: ['./delete-warning-dialog.component.css']
})

export class DeleteWarningDialogComponent  {
  
  targets: Target[];

  constructor(public dialogRef: MatDialogRef<DeleteWarningDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DeleteWarningDialogData, private targetService: TargetService) {}

  delete(target: Target): void {
    console.log(this.data.targets);
    this.data.targets = this.data.targets.filter(h => h !== target);
    console.log(this.data.targets);
    this.targetService.deleteTarget(target).subscribe();
  }
}
