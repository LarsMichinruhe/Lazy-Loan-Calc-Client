import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { LoanCalculatorComponent } from './app/app.component';

bootstrapApplication(LoanCalculatorComponent, {  
  providers: [importProvidersFrom(CommonModule), provideHttpClient()]
})
  .catch((err) => console.error(err));