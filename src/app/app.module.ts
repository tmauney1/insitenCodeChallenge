import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TargetsComponent } from './targets/targets.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { TargetDetailComponent } from './target-detail/target-detail.component';
import { FormsModule } from '@angular/forms';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { DeleteWarningDialogComponent } from './delete-warning-dialog/delete-warning-dialog.component';
import { DeleteContactWarningDialogComponent } from './delete-contact-warning-dialog/delete-contact-warning-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetsComponent,
    TargetDetailComponent,
    SuccessDialogComponent,
    DeleteWarningDialogComponent,
    DeleteContactWarningDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [SuccessDialogComponent, DeleteWarningDialogComponent,  DeleteContactWarningDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
