import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LoanService } from './loan.service';

@Component({
  selector: 'loancalc',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoanCalculatorComponent {
  loanRequest = {
    principal: 0,
    annualInterestRate: 0,
    years: 0,
    monthlyPayment: 0
  };
  loanResponse: any;

  constructor(private loanService: LoanService) { }

  calculateLoan(form: NgForm) {
    if (form.valid && this.areValuesPositive()) {
      this.loanService.calculateLoan(this.loanRequest).subscribe(response => {
        this.loanResponse = response;
      });
    } else {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
  
  private areValuesPositive(): boolean {
    return this.loanRequest.principal > 0 &&
           this.loanRequest.annualInterestRate > 0 &&
           this.loanRequest.years > 0 &&
           this.loanRequest.monthlyPayment > 0;
  }
}
