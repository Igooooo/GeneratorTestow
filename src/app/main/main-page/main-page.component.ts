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
  testFrom  = new FormGroup({})
  typeOfSubjectDefault = subjectType.matematyka;
  typeOfSubject = Object.values(subjectType);
  typeOfQuestionDefault = questionType.all;
  typeOfQuestion = Object.values(questionType);
  typeOfVolumenDefault = volumenType.min;
  typeOfVolumen = Object.values(volumenType);
  typeOfTimeDefault = timeType.avr;
  typeOfTime = Object.values(timeType);
  sendToTest ?: testForm;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private data: MainService) {}

  ngOnInit(): void {
    this.createTestFrom();
    this.data.currentMessage.subscribe(msg => this.sendToTest = msg);
  }

  sendMessage(zmienna: testForm) {
    this.data.changeMessage(zmienna);
  }

  createTestFrom() : void {
    this.testFrom = this.formBuilder.group({
      subject: [this.typeOfSubjectDefault, Validators.compose([Validators.required])],
      question: [this.typeOfQuestionDefault, Validators.compose([Validators.required])],
      volume: [this.typeOfVolumenDefault,Validators.compose([Validators.required])],
      time: [this.typeOfTimeDefault,Validators.compose([Validators.required])], 
    });
  }

  submit() : void {
    this.sendToTest = this.testFrom.value;
    this.sendMessage(this.testFrom.value);
    this.router.navigate(['test']);  
  }
}
