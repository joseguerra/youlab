import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule,MdNativeDateModule} from '@angular/material';
import { DatePickerModule } from 'angular-io-datepicker';
import { OverlayModule } from 'angular-io-overlay';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app.routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AppComponent} from './app.component';

/*Components*/
import {UserComponent} from './user/user.component';
import {ExamenComponent} from './examen/examen.component';

import {DialogResultExampleDialog} from './dialog/dialog.component';
import {DialogComponent} from './user/dialogCreate/dialog.component';
import {DialogEditComponent} from './user/dialogEdit/dialogEdit.component';
import {DialogAddExamenComponent} from './user/dialogAddExamen/dialogAddExamen.component';

import {DialogExamenComponent} from './examen/dialogCreate/dialog.component';
import {DialogEditExamenComponent} from './examen/dialogEdit/dialogEdit.component';
import {DialogVerExamenComponent} from './examen/dialogVerExamen/dialogVerExamen.component';
import {snackBarComponent} from './snackBar/snackBar.component';


/*providers*/
import {UserService} from './user/user.service';
import {ExamenService} from './examen/examen.service';
import {Rutas} from './rute';

import {MdDialog, MdDialogRef,MD_DIALOG_DATA} from '@angular/material';
import 'hammerjs';

export const firebaseConfig = {

    apiKey: "AIzaSyCpQuHEs8EiCKf0ihsswf2OMnyW80vEzR8",
    authDomain: "youlab-a9ea6.firebaseapp.com",
    databaseURL: "https://youlab-a9ea6.firebaseio.com",
    storageBucket: "youlab-a9ea6.appspot.com",
    messagingSenderId: "278580934207"

};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, 
    ExamenComponent,
    DialogResultExampleDialog,
    DialogComponent,
    DialogEditComponent,
    DialogAddExamenComponent,
    DialogExamenComponent,
    DialogEditExamenComponent,
    DialogVerExamenComponent,
    snackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    DatePickerModule,
    
    MdNativeDateModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,   
    ExamenService, 
    { provide: MD_DIALOG_DATA, useValue: "someAnyTypeObjectHereThatYouWillGetTheDataFrom"},
    Rutas
  ],
  entryComponents: [    
    snackBarComponent,
    DialogResultExampleDialog,
    DialogComponent,
    DialogEditComponent,
    DialogAddExamenComponent,
    DialogExamenComponent,
    DialogEditExamenComponent,
    DialogVerExamenComponent   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
