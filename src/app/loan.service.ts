import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8080/api/loan/calculate';

  constructor(private http: HttpClient) { }

  calculateLoan(loanRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loanRequest, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 
