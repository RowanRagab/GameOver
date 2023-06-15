import { Component } from '@angular/core';
import { RegisterationService } from '../registeration.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading:boolean = false;
  errMsg:string = '';
  constructor(private _RegisterationService:RegisterationService , private _Router:Router){}
  loginForm:FormGroup = new FormGroup({
  email:new FormControl(null,[Validators.required , Validators.email]),
  password:new FormControl(null,[ Validators.required , Validators.minLength(6) , Validators.maxLength(20)]),
})

login(loginForm:FormGroup){
  this.isLoading = true;
  this._RegisterationService.login(loginForm.value).subscribe({
    next:(res)=>{
      if(res.message === 'success'){
        localStorage.setItem('token' , res.token);
        this._RegisterationService.deCodeToken()
        this.isLoading = false;
this._Router.navigate(['/all'])
      }
    },
    error:(err)=>{
    this.errMsg = err.error.message;
    this.isLoading = false;      

    }
  })
  
}
}
function deCodeToken() {
  throw new Error('Function not implemented.');
}

