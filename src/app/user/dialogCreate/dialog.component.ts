import {Component} from '@angular/core';
import {MdDialogRef,MdSnackBar} from '@angular/material';
import {UserService} from '../user.service';
import {snackBarComponent} from '../../snackBar/snackBar.component';

@Component({
  templateUrl: 'dialog.html'
})
export class DialogComponent {
  cedula: string;
  valido: boolean = false;
  constructor(private userService:UserService,
              public dialogRef: MdDialogRef<DialogComponent>,
              private snackBar: MdSnackBar) {
  }

  save(form){
    this.userService.addUser(form)
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 2000,
    });
    this.dialogRef.close();
  }
  focusOutFunction(){
    this.userService.getUser(this.cedula).subscribe(data=>{   
        if(data.length == 0){
          this.valido = false;
        }
        else{
          this.valido = true;
        }
        
      
      },err=>{

      })
  }
}