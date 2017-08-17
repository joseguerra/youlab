import {Component} from '@angular/core';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  objects = [
    {
      name: 'Pacientes',
      avatar: 'svg-11',
      routerLink: 'user'
    },
    {
      name: 'Examenes',
      avatar: 'svg-12',
      routerLink: 'examen'
    },  
  ];

  selectedUser = this.objects[0];
  isDarkTheme = false;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

}
