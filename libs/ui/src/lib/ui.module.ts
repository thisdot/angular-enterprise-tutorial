import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent]
})
export class UiModule {}
