import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Target } from '../models/target';
import { ActivatedRoute } from '@angular/router';
import { TargetService } from '../target.service';
import { Location } from '@angular/common';
import { Status } from '../models/status';
import { States } from '../models/states';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SuccessDialogData } from '../success-dialog/success-dialog.component';
import { DeleteWarningDialogComponent, DeleteWarningDialogData } from '../delete-warning-dialog/delete-warning-dialog.component';
import { DeleteContactWarningDialogData, DeleteContactWarningDialogComponent } from '../delete-contact-warning-dialog/delete-contact-warning-dialog.component';

@Component({
  selector: 'app-target-detail',
  templateUrl: './target-detail.component.html',
  styleUrls: ['./target-detail.component.css']
})
export class TargetDetailComponent implements OnInit {
 

  target: Target;

  edit: boolean = false;

  editContact: boolean = false;

  targetStatusOptions: string[] = Object.keys(Status);

  states: string[] = Object.keys(States);

  addContactForm: boolean = false;

  addContactName = '';
  
  addContactPhoneNumber = '';

  selectedContact;

  originalData;

  

  constructor( private route: ActivatedRoute, private targetService: TargetService, private location: Location, public dialog: MatDialog) { }

  ngOnInit() {
    this.getTarget();
  }

  getTarget(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.targetService.getTarget(id)
      .subscribe(target => {
        this.target = target;
	      this.originalData = JSON.parse(JSON.stringify(this.target));
      });
  }

  onSaveChanges(): void {
    this.target.dateLastUpdated = new Date;
    this.targetService.updateTarget(this.target).subscribe();
  }

  trackByFn(index: any, item: any) {
    return index;
   } 

  addContact(addContactName, addContactPhoneNumber){
    let obj;

    obj = {name: addContactName, phoneNumber: addContactPhoneNumber};

    this.target.keyContacts.push(obj);

    this.addContactName='';
    this.addContactPhoneNumber='';
  }

  goBack(): void {
    this.location.back();
  }

  //Sets chosen account to be used in DeleteContactWarningDialog
  onSelect(contact): void {
    this.selectedContact = contact;
  }

  onCancel(){
    this.getTarget();
    this.edit=false;
    this.originalData = this.target;
  }
  

  openDeleteContactWarningDialog(): void {
    // Create a dialog configuration so we can customize the dialog. 
      const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;
       dialogConfig.width = '450px';
       dialogConfig.panelClass = "warning-dialog";
    // Add the data that we're going to pass to the dialog to the config.
       const dialogData = new DeleteContactWarningDialogData();
       dialogData.title = 'Warning';
       dialogData.errorMessage = 'Are you sure you want to delete this contact?';
       dialogData.contact = this.selectedContact;
       dialogData.target = this.target;
       dialogConfig.data = dialogData;
    // Open the dialog.
      const dialogRef = this.dialog.open(DeleteContactWarningDialogComponent,  dialogConfig );

       dialogRef.afterClosed().subscribe(() => {
        
       });

  }
 


}
