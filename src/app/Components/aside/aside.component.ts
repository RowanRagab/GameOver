import { Component, OnInit, Output } from '@angular/core';
import { asideData } from './aside-data';
import { ToastrService } from 'ngx-toastr';
import { RegisterationService } from 'src/app/register/registeration.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  collapsed: boolean = false;
  asideData = asideData;
  layout: boolean = false;
  isLogin: boolean = false;
  constructor(private toastr: ToastrService, private _RegisterationService: RegisterationService) { }
  // check token if user login will show menu content if not it'll be hide 
  ngOnInit(): void {
    this._RegisterationService.userData.subscribe({
      next: () => {
        if (this._RegisterationService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    })
  }
  // show error if user try to go into game details and he does'nt have an acc
  showError() {
    if (localStorage.getItem('token') == null) {
      this.toastr.error("You Need To Login Frist and if you don't have an account we need you to join us", 'You need To join us first');
    }
  }
  // make menu ease to use
  toggleCollapse(): void {
    this.collapsed = !this.collapsed
  }
  // if user clicked on dropdown, memu will expend to show details
  opensideNave(): void {
    this.collapsed = true
  }
  //  X icon function
  closeSideNave(): void {
    this.collapsed = false
  }
}
