import { Component } from '@angular/core';
import { RegisterationService } from '../registeration.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {
  token:any = localStorage.getItem('token');
  errMsg:string='';
  constructor(private _RegisterationService:RegisterationService,private toastr: ToastrService){}
  resetForm:FormGroup =new FormGroup({
    currentPassword:new FormControl(null),
    password:new FormControl(null),
    rePassword:new FormControl(null)
  })

  resetPass(resetForm:FormGroup){
    this._RegisterationService.resetPass(resetForm.value, this.token).subscribe({
      next:(res)=>{
        if(res.message === 'success'){
          this.toastr.success("Your Password reset successfully", 'Great All Done');
        }else{
          this.toastr.error("Please Try again leter", 'Oops !');
        }
console.log(res);
      },
      error:(err)=>{
        console.log(err.error.errors.msg);
        this.errMsg= err?.error?.errors.msg;
        this.toastr.error(err?.error?.errors.msg, 'Oops !');
      }
    })
  }

}
