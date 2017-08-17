import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router,ActivatedRoute} from '@angular/router';
import {MdDialog, MdDialogRef,MdSnackBar} from '@angular/material';
import {DialogResultExampleDialog} from '../dialog/dialog.component';

import {DialogComponent} from './dialogCreate/dialog.component';
import {DialogEditComponent} from './dialogEdit/dialogEdit.component';
import {DialogAddExamenComponent} from './dialogAddExamen/dialogAddExamen.component';

import {snackBarComponent} from '../snackBar/snackBar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dialogRef: MdDialogRef<DialogEditComponent> | null;
  lista: Array<any>;  
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  prueba: boolean = true;
  config:any; 
  buscar:string
  mensaje: boolean= false;
  constructor(private userService:UserService,
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

      this.userService.getUsers().subscribe(data=>{   
        this.prueba = false;
        this.lista = data.reverse();      
      
      },err=>{

      })
    
    
  }

  longitud(){
    
  }

  onBuscar(){
    console.log("entre")
    this.userService.getUser(this.buscar).subscribe(data=>{   
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
    this.dialog.open(DialogComponent)
  }

  private openDialogAddExamen(item) {
    this.config = {
      height: '400px',
      width: '600px',
      data: {
        key: item.$key,
        name: item.name,
        lastName: item.lastName,
        cedula: item.cedula   
      }
    };
    this.dialog.open(DialogAddExamenComponent, this.config)
  }

  private openAdminDialogEdit(item) {
    this.config = {
      data: {
        lastName: item.lastName,                
        name: item.name,                
        email: item.email,                
        address: item.address,                
        telephone: item.telephone,                
        cedula: item.cedula,
        date: item.date,
        key: item.$key   
      }
    };
    let cedula = item.cedula;
    this.dialogRef = this.dialog.open(DialogEditComponent,this.config)
    

  }

  borrar(key: string){
     let dialogRef = this.dialog.open(DialogResultExampleDialog, {
      data: key,
    });    

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userService.deleteUser(key)
      this.snackBar.openFromComponent(snackBarComponent, {
        duration: 2000,
      });
      }      
    });        
  }


}
