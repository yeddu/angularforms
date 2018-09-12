import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Employee, IEmployee } from './employee';
import { FormPostService } from '../form-post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'af-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public languages: string [];
  public employee: IEmployee;
  public hasPrimaryLanguageError: boolean;

  constructor(private languageService: LanguageService, private formPostService: FormPostService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    this.employee = new Employee('', '', true, 'w2', 'default');
    this.hasPrimaryLanguageError = false;
  }

  validatePrimaryLanguage(value) {

    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
        this.hasPrimaryLanguageError = false;
      }
  }

  submitForm(form: NgForm) {

    this.validatePrimaryLanguage(this.employee.primaryLanguage);

    if (this.hasPrimaryLanguageError) { return; }

    this.formPostService.postEmployeeForm(this.employee)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      );
  }
}
