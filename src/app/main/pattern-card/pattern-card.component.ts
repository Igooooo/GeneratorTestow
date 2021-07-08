import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pattern-card',
  templateUrl: './pattern-card.component.html',
  styleUrls: ['./pattern-card.component.scss']
})
export class PatternCardComponent implements OnInit {

  constructor(public dialog: MatDialogRef<PatternCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.close();
  }


}
