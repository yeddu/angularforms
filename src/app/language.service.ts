import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguages(): string[] {
    return ['English', 'French', 'Spanish', 'Cantonese', 'Other'];
  }
}
