import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent]
})
export class UiModule {}
