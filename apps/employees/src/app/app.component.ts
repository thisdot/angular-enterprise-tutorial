import { Component } from '@angular/core';
import { EmployeeService } from '@thisdotx/ui';

@Component({
  selector: 'thisdotx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private employeeService: EmployeeService) {}
}
