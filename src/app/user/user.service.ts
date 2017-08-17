import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from './user';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Rutas} from '../../app/rute';

import 'rxjs/add/operator/map';



@Injectable()
export class UserService {    
	pacientes: FirebaseListObservable<any[]>;
  constructor(        
    private http: Http,
    public db: AngularFireDatabase,
    public rutas: Rutas
  ) {

   }


  getUsers(){      
    this.pacientes = this.db.list('/pacientes') as FirebaseListObservable<any[]>;
		return this.pacientes;
  }

  userCount(){
 
  }

  getUser(cedula: string){     
    this.pacientes = this.db.list('/pacientes', {
			query: {
				orderByChild: 'cedula',
				equalTo: cedula
      }
		}) as FirebaseListObservable<any[]>;
		return this.pacientes;
  }

  addUser(user: User){     
    const itemObservable = this.db.list('/pacientes');
    itemObservable.push(
      {
        name: user.name,
        lastName: user.lastName,
        cedula: user.cedula,
        date: user.date,
        address: user.address,
        email: user.email,
        telephone: user.telephone
      });
  }

  addExamen(examenes,key){   
    let f = new Date();
    let g = f.getDate() + "" + (f.getMonth() +1) + "" + f.getFullYear();
    console.log(g)
    const itemObservable = this.db.list('/pacientes/'+key+'/historial');
    itemObservable.push( {
      examenes: examenes,
      date: g
    })

    
  }

  addHistorial(examenes,name,lastName,cedula){
    let f = new Date();
    let g = (f.getMonth() +1) + "/" + f.getDate() + "/" +  f.getFullYear();  
    const itemObservable = this.db.list('/historial');
    itemObservable.push( {
      examenes: examenes,
      date: g,
      name:name,
      lastName:lastName,
      cedula:cedula
    })
  }

  getHistorial(date){   
    console.log(date)
    this.pacientes = this.db.list('/historial', {
			query: {
				orderByChild: 'date',
				equalTo: date
        

      }
		}) as FirebaseListObservable<any[]>;
		return this.pacientes;
  }

  putUser(user){   
    const itemObservable = this.db.list('/pacientes');
    itemObservable.update(user.key, {
      name: user.name,
      lastName: user.lastName,
      date: user.date,
      address:user.address,
      email:user.email,
      telephone: user.telephone      
    })
  }

  deleteUser(key: string){  
      const itemObservable = this.db.list('/pacientes');
      itemObservable.remove(key);

  }

}
