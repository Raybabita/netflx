import { Component, InjectionToken, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {
  description!: string;

  constructor(private dialogRef: MatDialogRef<ModalpopupComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.description = data.description;
  }


  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}


