import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pattern-card',
  templateUrl: './pattern-card.component.html',
  styleUrls: ['./pattern-card.component.scss']
})
export class PatternCardComponent implements OnInit {
  pdfSrc: string = "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2015/Informatory/2015/MATURA_2015_Wybrane_wzory_matematyczne.pdf";

  constructor(public dialog: MatDialogRef<PatternCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.close();
  }


}
