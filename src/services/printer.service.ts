import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environment/environment.dev';

@Injectable({ providedIn: 'root' })
export class PrinterService {
  // private api = environment.apiUrl;
  private api = environment.apiUrl + '/send';

  constructor(private http: HttpClient) {}

  sendCommand(command: string) {
    return this.http.post<any>(this.api, { text: command }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.error?.message || 'Server not reachable');
      })
    );
  }
}
