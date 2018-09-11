import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguages(): string[] {
    return ['English', 'French', 'Spanish', 'Cantonese', 'Other'];
  }
}
