import { Component } from '@angular/core';

//nell appcomponent.ts si dovrebbero mettere i possibili script da aggiungere al app components html
@Component({
  selector: 'ese-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
}
