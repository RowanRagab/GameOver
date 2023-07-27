import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
baseURL:string = 'https://ecommerce.routemisr.com/';
alldata:any;
nameOfUser:any ;
userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient ,private _Router:Router ) {

    if(localStorage.getItem('token') !==null){
      this.deCodeToken()
    }
   }

  deCodeToken(){
    const decode = JSON.stringify(localStorage.getItem('token'));
    const encode:any = jwtDecode(decode);
    this.userData.next(encode);
this.alldata =this.userData;
    this.nameOfUser = this.alldata._value.name;

  }

  signUp(regisrerForm:any):Observable<any> {
    return this._HttpClient.post(this.baseURL+'api/v1/auth/signup',regisrerForm)
  }

  login(loginForm:any):Observable<any>{
    return this._HttpClient.post(this.baseURL+'api/v1/auth/signin',loginForm)
  }

  logOut(){
    localStorage.removeItem('token');
    this.userData.next(null)
this._Router.navigate(['/login'])
  }

  resetPass(resetForm:any ,token:string):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',resetForm ,{headers:{token}})
  }
}
