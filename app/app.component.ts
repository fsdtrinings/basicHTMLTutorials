import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CapgDemoApp1';
  username:string = 'Ramesh'; // bind this variable with spring rest endpoint
}
