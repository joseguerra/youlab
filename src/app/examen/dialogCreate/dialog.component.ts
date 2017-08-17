import {Component} from '@angular/core';
import {MdDialogRef,MdSnackBar} from '@angular/material';
import {ExamenService} from '../examen.service'
import {snackBarComponent} from '../../snackBar/snackBar.component';
@Component({
  templateUrl: 'dialog.html'
})
export class DialogExamenComponent {
  selectedValue: string;

  categorias = [
    {value: 'HEMATOLOGIA COMPLETA'},
    {value: 'ELECTROLITOS'},
    {value: 'COAGULACION'},
    {value: 'HORMONAS'},
    {value: 'QUIMICA SANGUINEA'},
    {value: 'SEROLOGIA'},
    {value: 'INMUNOLOGIA'},
    {value: 'TOXICOLOGIA'},
    {value: 'UROANALISIS'},
    {value: 'COPROLOGIA'},
    {value: 'FERROCINETICA'},
    {value: 'LIQUIDOS BIOLOGICOS'},
    {value: 'PARASITOS Y BACTERIAS'},
    {value: 'MICROBIOLOGIA'},
    {value: 'BIOPSIAS'},
    {value: 'OTROS'},
  ];
  constructor(private examenService:ExamenService,
              public dialogRef: MdDialogRef<DialogExamenComponent>,
              private snackBar: MdSnackBar) {
  }

  save(form){
    console.log(form)
    this.examenService.addExamen(form)
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 2000,
    });
    this.dialogRef.close();
  }
}