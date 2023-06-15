import { Component } from '@angular/core';
import { RegisterationService } from '../registeration.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {
nameOfUser:any;
isToggle:boolean = false;
constructor(private _RegisterationService:RegisterationService){
 this.nameOfUser =  _RegisterationService.nameOfUser
}
toggle(){
  this.isToggle = !this.isToggle;
}

}
