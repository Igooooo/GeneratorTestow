import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { testForm } from 'src/app/shared/model/testForm';
import { MainService } from '../main.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {


  source = timer(1000);
  questionFrom: FormGroup;
  testForm?: testForm;
  numberOfQuestion?: any;
  questionType?:string;
  timer?: any;
  currentTimeInSeconds?: any
  questionTab: any = [];

  options = ['a', 'b', 'c', 'd'];

  qDB = {
    id: 'test 1',
    question: [
      {id: '1', type: 'type a',title: 'pytanie 1',answers:[{ id: 'q1-a1',answer: 'odp A'},{id: 'q1-a2',answer: 'odp B'},{id: 'q1-a3',answer: 'odp C'},{ id: 'q1-a4', answer: 'odp D'}]},
      {id: '2', type: 'type b',title: 'pytanie 2',answers:[{ id: 'q2-a1',answer: 'odp A'},{id: 'q2-a2',answer: 'odp B'},{id: 'q2-a3',answer: 'odp C'},{ id: 'q2-a4', answer: 'odp D'}]},
      {id: '3', type: 'type c',title: 'pytanie 3',answers:[{ id: 'q3-a1',answer: 'odp A'},{id: 'q3-a2',answer: 'odp B'},{id: 'q3-a3',answer: 'odp C'},{ id: 'q3-a4', answer: 'odp D'}]},
      {id: '4', type: 'type a',title: 'pytanie 4',answers:[{ id: 'q4-a1',answer: 'odp A'},{id: 'q4-a2',answer: 'odp B'},{id: 'q4-a3',answer: 'odp C'},{ id: 'q4-a4', answer: 'odp D'}]},
      {id: '5', type: 'type a',title: 'pytanie 5',answers:[{ id: 'q5-a1',answer: 'odp A'},{id: 'q5-a2',answer: 'odp B'},{id: 'q5-a3',answer: 'odp C'},{ id: 'q5-a4', answer: 'odp D'}]},
      {id: '6', type: 'type c',title: 'pytanie 6',answers:[{ id: 'q6-a1',answer: 'odp A'},{id: 'q6-a2',answer: 'odp B'},{id: 'q6-a3',answer: 'odp C'},{ id: 'q6-a4', answer: 'odp D'}]},
      {id: '7', type: 'type c',title: 'pytanie 7',answers:[{ id: 'q7-a1',answer: 'odp A'},{id: 'q7-a2',answer: 'odp B'},{id: 'q7-a3',answer: 'odp C'},{ id: 'q7-a4', answer: 'odp D'}]},
      {id: '8', type: 'type a',title: 'pytanie 8',answers:[{ id: 'q8-a1',answer: 'odp A'},{id: 'q8-a2',answer: 'odp B'},{id: 'q8-a3',answer: 'odp C'},{ id: 'q8-a4', answer: 'odp D'}]},
      {id: '9', type: 'type a',title: 'pytanie 9',answers:[{ id: 'q9-a1',answer: 'odp A'},{id: 'q9-a2',answer: 'odp B'},{id: 'q9-a3',answer: 'odp C'},{ id: 'q9-a4', answer: 'odp D'}]},
      {id: '10', type: 'type d',title: 'pytanie 10',answers:[{ id: 'q10-a1',answer: 'odp A'},{id: 'q10-a2',answer: 'odp B'},{id: 'q10-a3',answer: 'odp C'},{ id: 'q10-a4', answer: 'odp D'}]},
      {id: '11', type: 'type d',title: 'pytanie 11',answers:[{ id: 'q11-a1',answer: 'odp A'},{id: 'q11-a2',answer: 'odp B'},{id: 'q11-a3',answer: 'odp C'},{ id: 'q11-a4', answer: 'odp D'}]},
      {id: '12', type: 'type d',title: 'pytanie 12',answers:[{ id: 'q12-a1',answer: 'odp A'},{id: 'q12-a2',answer: 'odp B'},{id: 'q12-a3',answer: 'odp C'},{ id: 'q12-a4', answer: 'odp D'}]},
      {id: '13', type: 'type a',title: 'pytanie 13',answers:[{ id: 'q13-a1',answer: 'odp A'},{id: 'q13-a2',answer: 'odp B'},{id: 'q13-a3',answer: 'odp C'},{ id: 'q13-a4', answer: 'odp D'}]},
      {id: '14', type: 'type b',title: 'pytanie 14',answers:[{ id: 'q14-a1',answer: 'odp A'},{id: 'q14-a2',answer: 'odp B'},{id: 'q14-a3',answer: 'odp C'},{ id: 'q14-a4', answer: 'odp D'}]},
      {id: '15', type: 'type a',title: 'pytanie 15',answers:[{ id: 'q15-a1',answer: 'odp A'},{id: 'q15-a2',answer: 'odp B'},{id: 'q15-a3',answer: 'odp C'},{ id: 'q15-a4', answer: 'odp D'}]},
    ]
  }

  /*
  questionDB = [
    {questionName: 'pytanie 1', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1"},
    {questionName: 'pytanie 2', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2"},
    {questionName: 'pytanie 3', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3"},
    {questionName: 'pytanie 4', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1"},
    {questionName: 'pytanie 5', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2"},
    {questionName: 'pytanie 6', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3"},
    {questionName: 'pytanie 7', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1"},
    {questionName: 'pytanie 8', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2"},
    {questionName: 'pytanie 9', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3"},
    {questionName: 'pytanie 10', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1"},
    {questionName: 'pytanie 11', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2"},
    {questionName: 'pytanie 12', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3"},
    {questionName: 'pytanie 13', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 1"},
    {questionName: 'pytanie 14', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 2"},
    {questionName: 'pytanie 15', a1:"A tekst", a2:"B tekst", a3:"C tekst", a4:"D tekst", type: "type 3"}, 
  ] */

  constructor(private data: MainService,
              private formBuilder: FormBuilder,
              private router: Router) { 
    this.questionFrom = this.formBuilder.group({
        question: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(msg => this.testForm = msg);
    this.numberOfQuestion = this.testForm?.volume;  
    this.questionType = this.testForm?.question;
    this.timer = this.testForm?.time;
    this.currentTimeInSeconds=Math.floor(Date.now()/1000 + this.timer*60);
    this.addQuestionToForm(this.numberOfQuestion);
    this.source.subscribe(val => console.log(val));
  }

  get question() {
    return this.questionFrom.get("question") as FormArray
  } 

  newQuestionNew(question: any): FormGroup {
    return this.formBuilder.group({
      question_id: [question.id, Validators.required],
      question: [question.title, Validators.required],
      answer_id: ['false', Validators.required],
      question_type: [question.type, Validators.required]
    })
  }

  addQuestionToForm(value: number) {
    for(let i = 0; i < value ; i++) {
      this.question.push(this.newQuestionNew(this.qDB.question[i])) // this.questionDB[i]
    }
  }
  
  deleteQuestion(questionIndex: number) {
    this.question.removeAt(questionIndex);
  }

  onSubmit(){
    console.log(this.questionFrom.value);
    this.router.navigate(['checkTest']);  
  }

  onfinishTime(): void {
    console.log('Koniec!');
    this.onSubmit();
  }
}
