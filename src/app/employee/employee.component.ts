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
  public employee: IEmployee;
  public hasPrimaryLanguageError: boolean;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.employee = new Employee('', '', true, '', 'default');
    this.hasPrimaryLanguageError = false;
  }

  validatePrimaryLanguage(value) {

    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
        this.hasPrimaryLanguageError = false;
      }
    }
  }
