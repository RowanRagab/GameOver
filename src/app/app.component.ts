import { Component } from '@angular/core';
interface sideNaveToggle{
  screenWidth: number;
  collabsed : boolean;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

}
