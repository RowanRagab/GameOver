import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from 'src/app/Services/games.service';
import { RegisterationService } from 'src/app/register/registeration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  gamesArr: any[] = [];
  searchTerm: string = '';
  isLogin: boolean = false;
  static isLogin: any;
  // get search arr
  constructor(private _GamesService: GamesService, private _RegisterationService: RegisterationService, private toastr: ToastrService) {
    _GamesService.allGames().subscribe({
      next: (res) => {
        this.gamesArr = res;
      }
    })
  }
  // disappear user pic and reset pass without log in
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
  // logout fun
  logOut() {
    this._RegisterationService.logOut()
  }
  // show error if not login
  showError() {
    if (localStorage.getItem('token') == null) {
      this.toastr.error("You Need To Login Frist and if you don't have an account we need you to join us", 'You need To join us first');

    }
  }

}


