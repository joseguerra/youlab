import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {ExamenComponent} from './examen/examen.component';

const appRoutes: Routes = [
    {path: 'home',component: AppComponent},
    {path: 'user',component: UserComponent},
    {path: 'examen',component: ExamenComponent},

        
    

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}