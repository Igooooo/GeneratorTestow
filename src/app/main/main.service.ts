import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { testForm } from '../shared/model/testForm';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private testForm = new BehaviorSubject<testForm>({} as testForm);
  currentTestForm = this.testForm.asObservable();

  constructor() {}

  createTestForm(test: testForm) {
    this.testForm.next(test);
  }
  
}
