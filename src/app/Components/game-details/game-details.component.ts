import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameId: any;
  gameDetails: any;
  isLoading = false;
  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    // get id from active route
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.gameId = params.get('id');
        // get game details
        this.isLoading = true;
        this._GamesService.gameDetails(this.gameId).subscribe({
          next: (res) => {
            this.gameDetails = res;
            this.isLoading = false;
          }
        })
      }

    })
  }

  // owl carsoule screenshots
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
  }
}
