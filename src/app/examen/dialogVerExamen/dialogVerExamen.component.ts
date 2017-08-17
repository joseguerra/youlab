import {Component,Inject,Input} from '@angular/core';
import {MdDialogRef,MD_DIALOG_DATA,MdSnackBar} from '@angular/material';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ExamenService} from '../examen.service';
import {UserService} from '../../user/user.service';
import {snackBarComponent} from '../../snackBar/snackBar.component';

@Component({
  templateUrl: 'dialogVerExamen.html',
  styleUrls: ['dialogVerExamen.css']
})
export class DialogVerExamenComponent {
  @Input() picker: any;
  cedula: string;
  lista: Array<any>; 
  examenes: any; 
  prueba: boolean = true;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  mensaje: boolean= false;
  constructor(private userService:UserService,
              private examenService:ExamenService,
              public dialogRef: MdDialogRef<DialogVerExamenComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private snackBar: MdSnackBar) {

    this.examenes = [];

  }


  ver(form){
     this.examenes = [];
    this.prueba = true;
    let date: string;
    date = form.picker._i.month+1 + "/" + form.picker._i.date + "/" + form.picker._i.year;

    this.userService.getHistorial(date).subscribe(data=>{ 
        this.prueba = false;
        if(data.length == 0){
          this.mensaje = true;
        }
        else{
          this.mensaje = false;
          this.examenes =data
        }
        
        
      
      },err=>{

      })
    
  }

}