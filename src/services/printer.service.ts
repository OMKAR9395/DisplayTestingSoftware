import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environment/environment.dev';

@Injectable({ providedIn: 'root' })
export class PrinterService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendCommand(command: string) {
    return this.http.post<any>(this.api, { command })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let msg = 'Unknown error';

          if (error.error?.message) {
            msg = error.error.message;
          } else if (error.status === 0) {
            msg = 'Node server not running';
          }

          return throwError(() => msg);
        })
      );
  }
}
