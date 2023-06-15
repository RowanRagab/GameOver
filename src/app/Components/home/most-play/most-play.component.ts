import { Component } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-most-play',
  templateUrl: './most-play.component.html',
  styleUrls: ['./most-play.component.scss']
})
export class MostPlayComponent {
  mostPlay: any[] = [];
  isLoading: boolean = false;
  // get games from service
  constructor(private _GamesService: GamesService, private Toastr: ToastrService) {
    this.isLoading = true
    _GamesService.allGames().subscribe({
      next: (res) => {
        this.mostPlay = res;
        this.isLoading = false;
      }
    })
  }
  // show more btn function
  showError() {
    if (localStorage.getItem('token') == null) {
      this.Toastr.error("You Need To Login Frist and if you don't have an account we need you to join us", 'Something went wrong');
    }
  }

}
