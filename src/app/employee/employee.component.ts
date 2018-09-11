import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Employee, IEmployee } from './employee';

@Component({
  selector: 'af-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public languages: string [];
  public employees: IEmployee [];
  public currentEmployee: IEmployee;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.currentEmployee = new Employee('Darla', 'Smith', true, 'w2', 'English');
    this.employees.push(this.currentEmployee);
  }

}
