import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';



@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionComponent
  ]
})
export class SharedModule { }
