import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-test',
  templateUrl: './check-test.component.html',
  styleUrls: ['./check-test.component.scss']
})
export class CheckTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkTestDB = {
    id: 'test 1',
    question: [
      {id: '1', type: 'type a',title: 'pytanie 1',selectedAnswer: 'odp A', goodAnswer: 'odp A', allAnswers:[{ id: 'q1-a1',answer: 'odp A'},{id: 'q1-a2',answer: 'odp B'},{id: 'q1-a3',answer: 'odp C'},{ id: 'q1-a4', answer: 'odp D'}]},
      {id: '2', type: 'type b',title: 'pytanie 2', selectedAnswer: 'odp B', goodAnswer: 'odp A',allAnswers:[{ id: 'q2-a1',answer: 'odp A'},{id: 'q2-a2',answer: 'odp B'},{id: 'q2-a3',answer: 'odp C'},{ id: 'q2-a4', answer: 'odp D'}]},
      {id: '3', type: 'type c',title: 'pytanie 3', selectedAnswer: 'odp B', goodAnswer: 'odp A',allAnswers:[{ id: 'q3-a1',answer: 'odp A'},{id: 'q3-a2',answer: 'odp B'},{id: 'q3-a3',answer: 'odp C'},{ id: 'q3-a4', answer: 'odp D'}]},
      {id: '4', type: 'type a',title: 'pytanie 4', selectedAnswer: 'odp A', goodAnswer: 'odp A',allAnswers:[{ id: 'q4-a1',answer: 'odp A'},{id: 'q4-a2',answer: 'odp B'},{id: 'q4-a3',answer: 'odp C'},{ id: 'q4-a4', answer: 'odp D'}]},
      {id: '5', type: 'type a',title: 'pytanie 5', selectedAnswer: 'odp A', goodAnswer: 'odp C',allAnswers:[{ id: 'q5-a1',answer: 'odp A'},{id: 'q5-a2',answer: 'odp B'},{id: 'q5-a3',answer: 'odp C'},{ id: 'q5-a4', answer: 'odp D'}]},
      {id: '6', type: 'type c',title: 'pytanie 6', selectedAnswer: 'odp C', goodAnswer: 'odp A',allAnswers:[{ id: 'q6-a1',answer: 'odp A'},{id: 'q6-a2',answer: 'odp B'},{id: 'q6-a3',answer: 'odp C'},{ id: 'q6-a4', answer: 'odp D'}]},
      {id: '7', type: 'type c',title: 'pytanie 7', selectedAnswer: 'odp D', goodAnswer: 'odp A',allAnswers:[{ id: 'q7-a1',answer: 'odp A'},{id: 'q7-a2',answer: 'odp B'},{id: 'q7-a3',answer: 'odp C'},{ id: 'q7-a4', answer: 'odp D'}]},
      {id: '8', type: 'type a',title: 'pytanie 8', selectedAnswer: 'odp D', goodAnswer: 'odp A',allAnswers:[{ id: 'q8-a1',answer: 'odp A'},{id: 'q8-a2',answer: 'odp B'},{id: 'q8-a3',answer: 'odp C'},{ id: 'q8-a4', answer: 'odp D'}]},
      {id: '9', type: 'type a',title: 'pytanie 9', selectedAnswer: 'odp A', goodAnswer: 'odp A',allAnswers:[{ id: 'q9-a1',answer: 'odp A'},{id: 'q9-a2',answer: 'odp B'},{id: 'q9-a3',answer: 'odp C'},{ id: 'q9-a4', answer: 'odp D'}]},
      {id: '10', type: 'type d',title: 'pytanie 10', selectedAnswer: 'odp A', goodAnswer: 'odp B',allAnswers:[{ id: 'q10-a1',answer: 'odp A'},{id: 'q10-a2',answer: 'odp B'},{id: 'q10-a3',answer: 'odp C'},{ id: 'q10-a4', answer: 'odp D'}]},
      {id: '11', type: 'type d',title: 'pytanie 11', selectedAnswer: 'odp A', goodAnswer: 'odp B',allAnswers:[{ id: 'q11-a1',answer: 'odp A'},{id: 'q11-a2',answer: 'odp B'},{id: 'q11-a3',answer: 'odp C'},{ id: 'q11-a4', answer: 'odp D'}]},
      {id: '12', type: 'type d',title: 'pytanie 12', selectedAnswer: 'odp A', goodAnswer: 'odp A',allAnswers:[{ id: 'q12-a1',answer: 'odp A'},{id: 'q12-a2',answer: 'odp B'},{id: 'q12-a3',answer: 'odp C'},{ id: 'q12-a4', answer: 'odp D'}]},
      {id: '13', type: 'type a',title: 'pytanie 13', selectedAnswer: 'odp A', goodAnswer: 'odp A',allAnswers:[{ id: 'q13-a1',answer: 'odp A'},{id: 'q13-a2',answer: 'odp B'},{id: 'q13-a3',answer: 'odp C'},{ id: 'q13-a4', answer: 'odp D'}]},
      {id: '14', type: 'type b',title: 'pytanie 14', selectedAnswer: 'odp B', goodAnswer: 'odp B',allAnswers:[{ id: 'q14-a1',answer: 'odp A'},{id: 'q14-a2',answer: 'odp B'},{id: 'q14-a3',answer: 'odp C'},{ id: 'q14-a4', answer: 'odp D'}]},
      {id: '15', type: 'type a',title: 'pytanie 15', selectedAnswer: 'odp A', goodAnswer: 'odp A',allAnswers:[{ id: 'q15-a1',answer: 'odp A'},{id: 'q15-a2',answer: 'odp B'},{id: 'q15-a3',answer: 'odp C'},{ id: 'q15-a4', answer: 'odp D'}]},
    ]
  }
  
}
