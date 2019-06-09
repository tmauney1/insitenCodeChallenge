import { Component, OnInit } from '@angular/core';
import { Target } from '../models/target';
import { TargetService } from '../target.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { States } from '../models/states';
import { Address } from '../models/address';
import { FinancialIdicators } from '../models/financial-idicators';
import { DeleteWarningDialogComponent, DeleteWarningDialogData } from '../delete-warning-dialog/delete-warning-dialog.component';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  targets: Target[];

  target: Target;

  selectedTarget: Target;

  states: string[] = Object.keys(States);

  addTargetForm = false;

  constructor(private targetService: TargetService, public dialog: MatDialog) { }

  ngOnInit() {

    this.getTargets();
    
    //Creates an empty target object for adding a new account target
    this.target = new Target();
    this.target.id = null;

    this.target.name= '';

    this.target.status= '';

    this.target.companyAddress = new Address();

    this.target.companyInfo= '';

    this.target.keyContacts=[{name: null, phoneNumber: null}];

    this.target.financialPerformance= new FinancialIdicators;
    
    this.target.dateLastUpdated= null;
  }

  getTargets(): void {
    this.targetService.getTargets()
    .subscribe(targets => this.targets = targets);
  }

  //Sets chosen account to be used in DeleteWarningDialog
  onSelect(target: Target): void {
    this.selectedTarget = target;
  }

  openAddTargetForm(){

    this.addTargetForm=true;
    setTimeout(function() {window.scroll({top: 350, behavior: 'smooth'}); } , 50);
    
  }

  //Add new account target
  add(targetName, targetStatus, targetCompanyStreet, targetCompanyCity, targetCompanyState, targetCompanyZip,
      targetCompanyInfo, targetKeyContactName, targetKeyContactPhoneNumber, targetRevenue, targetExpenses){

    const obj = {

      name: targetName,
      status: targetStatus,
      companyAddress:{
        street: targetCompanyStreet,
        city: targetCompanyCity,
        state: targetCompanyState,
        zipCode: targetCompanyZip
      },
      companyInfo: targetCompanyInfo,
      keyContacts: [
        {
          name: targetKeyContactName,
          phoneNumber: targetKeyContactPhoneNumber
        }
      ],
      financialPerformance: {
        revenue: targetRevenue,
        expenses: targetExpenses
      },
      dateLastUpdated: new Date(),
    }

    this.targetService.addTarget( obj as Target)
    .subscribe(target => {
      this.targets.push(target);
    });
   
  }

  openDeleteWarningDialog(): void {
    // Create a dialog configuration so we can customize the dialog. 
      const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;
       dialogConfig.width = '450px';
       dialogConfig.panelClass = "warning-dialog";
    // Add the data that we're going to pass to the dialog to the config.
       const dialogData = new DeleteWarningDialogData();
       dialogData.title = 'Warning';
       dialogData.errorMessage = 'Are you sure you want to delete this account?';
       dialogData.targets = this.targets;
       dialogData.target = this.selectedTarget;
       dialogConfig.data = dialogData;
    // Open the dialog.
      const dialogRef = this.dialog.open(DeleteWarningDialogComponent,  dialogConfig );

       dialogRef.afterClosed().subscribe(() => {
        this.getTargets();
       });
  }


}