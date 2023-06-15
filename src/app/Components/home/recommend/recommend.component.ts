import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent {
  allGames: any[] = [];
  isLoading: boolean = false;
// get games from service
  constructor(private _GamesService: GamesService, private toastr: ToastrService) {
    this.isLoading = true
    _GamesService.allGames().subscribe({
      next: (res) => {
        this.allGames = res;
        this.isLoading = false;
      }
    });

  }
  // show error btn
  showError() {
    if (localStorage.getItem('token') == null) {
      this.toastr.error("You Need To Login Frist and if you don't have an account we need you to join us", 'Something went wrong');
    }
  }

  // Owl Carsoul
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    navSpeed: 400,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,

      }, 400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

}
