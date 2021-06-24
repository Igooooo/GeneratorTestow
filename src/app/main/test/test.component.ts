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

  questionFrom: FormGroup;
  testForm?: testForm;
  numberOfQuestion?: any;
  questionType?:string;
  timer?: any;
  questionTab: any = [];

  questionDB = [
    {questionName: 'pytanie 1', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1", correct: 'A'},
    {questionName: 'pytanie 2', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2", correct: 'A'},
    {questionName: 'pytanie 3', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3", correct: 'A'},
    {questionName: 'pytanie 4', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1", correct: 'A'},
    {questionName: 'pytanie 5', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2", correct: 'A'},
    {questionName: 'pytanie 6', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3", correct: 'A'},
    {questionName: 'pytanie 7', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1", correct: 'A'},
    {questionName: 'pytanie 8', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2", correct: 'A'},
    {questionName: 'pytanie 9', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3", correct: 'A'},
    {questionName: 'pytanie 10', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1", correct: 'A'},
    {questionName: 'pytanie 11', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2", correct: 'A'},
    {questionName: 'pytanie 12', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3", correct: 'A'},
    {questionName: 'pytanie 13', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1", correct: 'A'},
    {questionName: 'pytanie 14', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2", correct: 'A'},
    {questionName: 'pytanie 15', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3", correct: 'A'}, 
  ]

  constructor(private data: MainService,
              private formBuilder: FormBuilder,) { 
   this.questionFrom = this.formBuilder.group({
        question: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(msg => this.testForm = msg);
    this.numberOfQuestion = this.testForm?.volume;  
    this.questionType = this.testForm?.question;
    this.timer = this.testForm?.time;
    this.addQuestionToForm(this.numberOfQuestion);
  }

  get question() {
    return this.questionFrom.get("question") as FormArray
  } 

  newQuestionNew(question: any): FormGroup {
    return this.formBuilder.group({
      question: [question.questionName, Validators.required],
      answer: ['false', Validators.required],
      type: [question.type, Validators.required]
    })
  }

  addQuestionToForm(value: number) {
    for(let i = 0; i < value ; i++) {
      this.question.push(this.newQuestionNew(this.questionDB[i]))
    }
  }
  
  deleteQuestion(questionIndex: number) {
    this.question.removeAt(questionIndex);
  }

  onSubmit(){
    console.log(this.questionFrom.value);
  }

}
