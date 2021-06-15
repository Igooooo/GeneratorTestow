import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { testForm } from 'src/app/shared/model/testForm';
import { MainService } from '../main.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {

  testForm2  = new FormGroup({})
  testForm?: testForm;
  numberOfQuestion?: any;
  questionType?:string;
  timer?: any;
  questionTab: any = [];

  question = [{
    questionName: 'pytanie 1',
    a1:"A tekst", 
    a2:"B tekst", 
    a3:"C tekst", 
    a4:"D tekst",
    type: "type 1",
    answer: '',
    correct: 'A'
  },
  {
    questionName: 'pytanie 2',
    a1:"A tekst", 
    a2:"B tekst", 
    a3:"C tekst", 
    a4:"D tekst",
    type: "type 2",
    answer: '',
    correct: 'A'
  },
  {
    questionName: 'pytanie 3',
    a1:"A tekst", 
    a2:"B tekst", 
    a3:"C tekst", 
    a4:"D tekst",
    type: "type 3",
    answer: '',
    correct: 'A'
  }]

  constructor(private data: MainService,
              private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(msg => this.testForm = msg);
    this.numberOfQuestion = this.testForm?.volume;  
    this.questionType = this.testForm?.question;
    this.timer = this.testForm?.time;
    this.createTest(Number(this.numberOfQuestion));
    this.createTestFrom();
  }

  
  // Tworzenie testu
  createTest(value: number) : void {
    for(let i = 1; i <= value ; i++) {
      this.questionTab.push(this.question);
    }
    this.testForm2 = this.formBuilder.group(this.questionTab)
  }

 
// Tworzenie formularza
  createTestFrom() : void {
       this.testForm2 = this.formBuilder.group({
        questionName: ['', Validators.compose([Validators.required])],
        answer: [' ', Validators.compose([Validators.required])],
        correct: [this.question[0].correct, Validators.compose([Validators.required])]
      });
  }

  verifyTest() {
    console.log(this.testForm2.value)
  }



}
