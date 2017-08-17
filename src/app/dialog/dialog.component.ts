import { Component,Inject } from '@angular/core';
import {MdDialog, MdDialogRef,MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
  styleUrls: ['./dialog-result-example-dialog.css']
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>,
              @Inject(MD_DIALOG_DATA) public data: any
  )
   {
    
  }
}
