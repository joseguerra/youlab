import {Component,Inject} from '@angular/core';
import {MdDialogRef,MD_DIALOG_DATA,MdSnackBar} from '@angular/material';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user.service';
import {ExamenService} from '../../examen/examen.service';
import {snackBarComponent} from '../../snackBar/snackBar.component';

@Component({
  templateUrl: 'dialogAddExamen.html',
  styleUrls: ['dialogAddExamen.css']
})
export class DialogAddExamenComponent {
  cedula: string;
  lista: Array<any>; 
  examenes: any; 
  prueba: boolean = true;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  constructor(private userService:UserService,
              private examenService:ExamenService,
              public dialogRef: MdDialogRef<DialogAddExamenComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private snackBar: MdSnackBar) {
    this.examenes = [];
    this.examenService.getExamenes().subscribe(data=>{ 
        this.prueba = false;
        this.lista =data
      
      },err=>{

      })
  }

  removeItemFromArr ( arr, item ) {
 	   var i = arr.indexOf( item );		
    	arr.splice( i, 1 );
	}

  cambio(data){
    console.log(data)
    let prueba: boolean = false

      
      for(let i =0; i<this.examenes.length;i++){
        console.log("as")
        if(data == this.examenes[i])
          prueba = true;
      }
			if(!prueba){
        console.log("as")
				this.examenes.push(data);							
			}else{								
				this.removeItemFromArr( this.examenes, data );				
			}
		
    console.log(this.examenes)
    
  }

  save(){
    console.log(this.data)
    this.userService.addExamen(this.examenes,this.data.key)
    this.userService.addHistorial(this.examenes,this.data.name,this.data.lastName,this.data.cedula);
    
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 2000,
    });
    this.dialogRef.close();
  }
}