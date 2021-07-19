import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { questionType } from 'src/app/shared/enums/questionType';
import { subjectType } from 'src/app/shared/enums/subjectType';
import { timeType } from 'src/app/shared/enums/timeType';
import { volumenType } from 'src/app/shared/enums/volumenType';
import { testForm } from 'src/app/shared/model/testForm';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  testFrom = new FormGroup({})
  typeOfSubjectDefault: string = subjectType.matematyka;
  typeOfSubject: string[] = Object.values(subjectType);
  typeOfQuestionDefault: string = questionType.all;
  typeOfQuestion: string[] = Object.values(questionType);
  typeOfVolumenDefault: string = volumenType.min;
  typeOfVolumen: string[] = Object.values(volumenType);
  typeOfTimeDefault: string = timeType.avr;
  typeOfTime: string[] = Object.values(timeType);
  sendToTest?: testForm;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private data: MainService) {}

  ngOnInit(): void {
    this.createTestFrom();
    this.data.currentTestForm.subscribe(data => this.sendToTest = data);
  }

  sendMessage(testForm: testForm): void {
    this.data.createTestForm(testForm);
  }

  createTestFrom(): void {
    this.testFrom = this.formBuilder.group({
      subject: [this.typeOfSubjectDefault, Validators.compose([Validators.required])],
      question: [this.typeOfQuestionDefault, Validators.compose([Validators.required])],
      volume: [this.typeOfVolumenDefault,Validators.compose([Validators.required])],
      time: [this.typeOfTimeDefault,Validators.compose([Validators.required])], 
    });
  }

  submit(): void {
    this.sendToTest = this.testFrom.value;
    this.sendMessage(this.testFrom.value);
    this.router.navigate(['test']);  
  }
}
