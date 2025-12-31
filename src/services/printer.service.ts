import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environments/environment.prod'; 

@Injectable({ providedIn: 'root' })
export class PrinterService {
  // private api = environment.apiUrl;
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendCommand(text: string) {
    return this.http.post<any>(`${this.baseUrl}/send`, {
      text
    });
  }

  // 2️⃣ Get job status
  getJobStatus(jobId: number) {
    return this.http.get<any>(`${this.baseUrl}/jobs/${jobId}`);
  }
}
