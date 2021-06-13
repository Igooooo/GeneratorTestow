import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { testForm } from '../shared/model/testForm';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private messageSource = new BehaviorSubject<testForm>({} as any);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: testForm) {
    this.messageSource.next(message);
  }
}
