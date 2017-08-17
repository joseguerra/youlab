import {Component,Inject} from '@angular/core';
import {MdDialogRef,MD_DIALOG_DATA,MdSnackBar} from '@angular/material';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user.service';
import {snackBarComponent} from '../../snackBar/snackBar.component';

@Component({
  templateUrl: 'dialogEdit.html'
})
export class DialogEditComponent {
  cedula: string;
  constructor(private userService:UserService,
              public dialogRef: MdDialogRef<DialogEditComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private snackBar: MdSnackBar) {

  }

  save(){
    this.userService.putUser(this.data)
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 2000,
    });
  }
}