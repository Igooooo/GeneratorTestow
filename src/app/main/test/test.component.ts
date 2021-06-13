import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { testForm } from 'src/app/shared/model/testForm';
import { MainService } from '../main.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {


  testForm?: testForm;
  numberOfQuestion?: any;
  questionType?:string;
  timer?: any;
  questionTab: any = [];



  constructor(private data: MainService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(msg => this.testForm = msg);
    this.numberOfQuestion = this.testForm?.volume;  
    this.questionType = this.testForm?.question;
    this.timer = this.testForm?.time;
    this.createTest(Number(this.numberOfQuestion));
  }

  
  
  createTest(value: number) : void {
    for(let i = 1; i <= value ; i++) {
      this.questionTab.push({name:`pytanie ` + i, a1:"A", a2:"B", a3:"C", a4:"D"})
    }
    
  }

}
