import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { questionType } from 'src/app/shared/enums/questionType';
import { subjectType } from 'src/app/shared/enums/subjectType';
import { testType } from 'src/app/shared/enums/testType';
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
  //typeOfQuestionDefault: string = questionType.all;
  typeOfQuestion: string[] = Object.values(questionType);
  typeOfVolumenDefault: string = volumenType.min;
  typeOfVolumen: string[] = Object.values(volumenType);
  typeOfTimeDefault: string = timeType.avr;
  testType: string[] = Object.values(testType);
  testTypeDefault: string = testType.all;
  testTypeConfigure: string = testType.choiceQuestions;
  typeOfTime: string[] = Object.values(timeType);
  sendToTest?: testForm;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private data: MainService) {}

  ngOnInit(): void {
    this.createTestFrom();
    this.data.currentTestForm.subscribe(data => this.sendToTest = data);
    this.addQuestionTypeToForm(this.typeOfQuestion.length);
  }

  sendMessage(testForm: testForm): void {
    this.data.createTestForm(testForm);
  }

  createTestFrom(): void {
    this.testFrom = this.formBuilder.group({
      testType: [this.testTypeDefault,Validators.compose([Validators.required])],
      subject: [this.typeOfSubjectDefault, Validators.compose([Validators.required])],
      volume: [this.typeOfVolumenDefault,Validators.compose([Validators.required])],
      time: [this.typeOfTimeDefault,Validators.compose([Validators.required])],  
      question: this.formBuilder.array([]),
    });
  }

  get question() {
    return this.testFrom.get("question") as FormArray;
  } 

  QuestionTypeFrom(type: any): FormGroup { // problem z interfejsem question!!
    return this.formBuilder.group({
      type: [type, Validators.required],
      isSelected: [false],
      volume: [this.typeOfVolumenDefault, Validators.required]
    })
  }

  addQuestionTypeToForm(value: number): void {
    for(let i = 0; i < value ; i++) {
      this.question.push(this.QuestionTypeFrom(this.typeOfQuestion[i])) 
    }
  }

  submit(): void {
    this.sendToTest = this.testFrom.value;
    this.sendMessage(this.testFrom.value);
    console.log('Test ', this.testFrom.value)
    this.router.navigate(['test']);  
  }

  selectAllCheckbox() {
    
  }

}
