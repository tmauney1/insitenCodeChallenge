import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Target } from '../models/target';
import { TargetService } from '../target.service';

export class DeleteContactWarningDialogData {

  title: string;

  errorMessage: string;

  targets: Target[];

  target: Target;

  contact;

}



@Component({
  selector: 'app-delete-contact-warning-dialog',
  templateUrl: './delete-contact-warning-dialog.component.html',
  styleUrls: ['./delete-contact-warning-dialog.component.css']
})

export class DeleteContactWarningDialogComponent  {
  
  targets: Target[];
  
  target: Target;

  constructor(public dialogRef: MatDialogRef<DeleteContactWarningDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DeleteContactWarningDialogData, private targetService: TargetService) {}

  delete(target: Target): void {
    console.log(this.data.targets);
    this.data.targets = this.data.targets.filter(h => h !== target);
    console.log(this.data.targets);
    this.targetService.deleteTarget(target).subscribe();
  }

  removeContact(contact){
    //console.log (this.target.keyContacts);
    this.data.target.keyContacts = this.data.target.keyContacts.filter(i => i !== contact);
    //console.log (this.target.keyContacts);
  }
}

