import {Component,Inject} from '@angular/core';
import {MdDialogRef,MD_DIALOG_DATA,MdSnackBar} from '@angular/material';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ExamenService} from '../examen.service';
import {snackBarComponent} from '../../snackBar/snackBar.component';
@Component({
  templateUrl: 'dialogEdit.html'
})
export class DialogEditExamenComponent {
  cedula: string;
  constructor(private examenService:ExamenService,
              public dialogRef: MdDialogRef<DialogEditExamenComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private snackBar: MdSnackBar) {

  }

  save(){
    this.examenService.putExamen(this.data)
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 2000,
    });
  }
}