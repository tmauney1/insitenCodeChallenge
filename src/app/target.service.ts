import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Target } from './models/target';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SuccessDialogData, SuccessDialogComponent } from './success-dialog/success-dialog.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TargetService {

 
  private targetsUrl = 'api/targets';

  constructor(private http: HttpClient, private messageService: MessageService, public dialog: MatDialog) { }

 
  getTargets (): Observable<Target[]> {
    return this.http.get<Target[]>(this.targetsUrl).pipe(
      tap(_ => this.log('fetched targets')),
      catchError(this.handleError<Target[]>('getTargets', []))
    );
  }


getTarget(id: number): Observable<Target> {
  const url = `${this.targetsUrl}/${id}`;
  return this.http.get<Target>(url).pipe(
    tap(_ => this.log(`fetched target id=${id}`)),
    catchError(this.handleError<Target>(`getTarget id=${id}`))
  );
}

updateTarget (target: Target): Observable<any> {
  return this.http.put(this.targetsUrl, target, httpOptions).pipe(
    tap(_ => this.log(`updated target id=${target.id}`)),
    catchError(this.handleError<any>('updateTarget'))
  );
}


 addTarget (target: Target): Observable<Target> {
  return this.http.post<Target>(this.targetsUrl, target, httpOptions).pipe(
    tap((newTarget: Target) => this.log(`added target w/ id=${newTarget.id}`)),
    catchError(this.handleError<Target>('addtarget'))
  );
}

deleteTarget (target: Target | number): Observable<Target> {
  const id = typeof target === 'number' ? target: target.id;
  const url = `${this.targetsUrl}/${id}`;

  return this.http.delete<Target>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted target id=${id}`)),
    catchError(this.handleError<Target>('deleteTarget'))
  );
}

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TargetService: ${message}`);
  }

  openSubmitSuccessDialog(): void {
    // Create a dialog configuration so we can customize the dialog. 
      const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;
       dialogConfig.width = '450px';
       dialogConfig.panelClass = "success-dialog";
    // Add the data that we're going to pass to the dialog to the config.
       const dialogData = new SuccessDialogData();
       dialogData.title = 'Success';
       dialogData.errorMessage = 'The submitted data was successfully saved';
       dialogConfig.data = dialogData;
    // Open the dialog.
       this.dialog.open(SuccessDialogComponent,  dialogConfig, );
  }

}



