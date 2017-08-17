import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Examen} from './examen';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Rutas} from '../../app/rute';

import 'rxjs/add/operator/map';



@Injectable()
export class ExamenService {    
	examenes: FirebaseListObservable<any[]>;
  constructor(        
    private http: Http,
    public db: AngularFireDatabase,
    public rutas: Rutas
  ) {

   }


  getExamenes(){      
    this.examenes = this.db.list('/examenes') as FirebaseListObservable<any[]>;
		return this.examenes;
  }

  userCount(){
 
  }

  getExamen(name: string){     
    this.examenes = this.db.list('/examenes', {
			query: {
				orderByChild: 'name',
				equalTo: name
      }
		}) as FirebaseListObservable<any[]>;

		return this.examenes;
  }

  addExamen(examen){     
    const itemObservable = this.db.list('/examenes');
    itemObservable.push(
      { 
           name: examen.name,
           precio: examen.precio,
           categoria: examen.categoria
        
      });
  }

  putExamen(examen){   
    const itemObservable = this.db.list('/examenes');
    itemObservable.update(examen.key, {
      name: examen.name,
      precio: examen.precio    
    })
  }

  deleteExamen(key: string){  
      const itemObservable = this.db.list('/examenes');
      itemObservable.remove(key);

  }

}
