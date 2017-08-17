import { Component, OnInit } from '@angular/core';
import {Examen} from './examen';
import {ExamenService} from './examen.service';
import {Router,ActivatedRoute} from '@angular/router';
import {MdDialog, MdDialogRef,MdSnackBar} from '@angular/material';
import {DialogResultExampleDialog} from '../dialog/dialog.component';

import {DialogExamenComponent} from './dialogCreate/dialog.component';
import {DialogEditExamenComponent} from './dialogEdit/dialogEdit.component';
import {DialogVerExamenComponent} from './dialogVerExamen/dialogVerExamen.component';

import {snackBarComponent} from '../snackBar/snackBar.component';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  dialogRef: MdDialogRef<DialogEditExamenComponent> | null;
  lista: Array<any>;  
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  prueba: boolean = true;
  config:any; 
  buscar:string
  mensaje: boolean= false;
  constructor(private examenService:ExamenService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar,
              private route: ActivatedRoute,
              private router: Router,) { 
      
              }
  
  ngOnInit() {
    
    this.get();                      
      
    this.longitud();
  }


  get(){    

      this.examenService.getExamenes().subscribe(data=>{ 
        console.log(data)
        for(let i =0;i<data.length;i++){
          this.prueba = data[0]
        }  
        this.prueba = false;
        this.lista = data.reverse();      
      
      },err=>{

      })
    
    
  }

  longitud(){
    
  }

  onBuscar(){
    this.examenService.getExamen(this.buscar).subscribe(data=>{   
        if(data.length == 0){
          this.mensaje = true;
        }
        else{
          this.lista = data;
        }
        
      
      },err=>{

      })
  }

  restablecer(){
    this.buscar = "";
    this.mensaje = false;
    this.get();        
  }


  private openAdminDialog() {
    this.dialog.open(DialogExamenComponent)
  }

  private openAdminDialogEdit(item) {
    this.config = {
      data: {        
        name: item.name,                
        precio: item.precio,                             
        key: item.$key   
      }
    };
    this.dialogRef = this.dialog.open(DialogEditExamenComponent,this.config)    
  }

  private openDialogVerExamen() {
    this.config = {
      height: '400px',
      width: '600px'
    };
    this.dialog.open(DialogVerExamenComponent, this.config)
  }

  borrar(key: string){
     let dialogRef = this.dialog.open(DialogResultExampleDialog, {
      data: key,
    });    

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.examenService.deleteExamen(key)
        this.snackBar.openFromComponent(snackBarComponent, {
          duration: 2000,
        });
      }      
    });        
  }

}
