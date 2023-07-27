import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from '../registeration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  errMessage:string = '';
  isLoading:boolean = false;
  constructor(private _RegisterationService:RegisterationService , private _Router:Router){}
  registerForm:FormGroup = new FormGroup({
  name:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required , Validators.email]),
  password:new FormControl(null,[ Validators.required , Validators.minLength(6) , Validators.maxLength(20)]),
  rePassword:new FormControl(null,[ Validators.required , Validators.minLength(6) , Validators.maxLength(20)]),
  phone:new FormControl(null ,[ Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
}, {validators:this.passwordMatch})

passwordMatch(registerForm:any){
  const passControl = registerForm.get('password');
  const repassControl = registerForm.get('rePassword');

  if(passControl.value === repassControl.value){
    return null;
  }else{
    repassControl.setErrors({passwordmatch:"pass doesn't match "})
    return {passwordmatch:"pass doesn't match "}
  }
}
register(registerForm:FormGroup){
  this.isLoading = true;
  this._RegisterationService.signUp(registerForm.value).subscribe({
    next:(res)=>{
      if(res.message === 'success'){
        console.log(res);
        this.isLoading = false;
this._Router.navigate(['rigester/login']);
      }
    },
    error:(err)=>{
      this.errMessage= err.error.message;
      this.isLoading = false;
    }
  })
  
}
}
