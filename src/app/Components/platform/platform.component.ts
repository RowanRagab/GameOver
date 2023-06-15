import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {
  platformType: any;
  platformArr: any[] = [];
  isLoading: boolean = false;
  clicks: number = 1;
  moreGames: number = 20;
    // get platform from active route and send it to service
  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesService: GamesService, private _Router: Router) {
    this.isLoading = true
    _ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('plat'));
        this.platformType = params.get('plat')
        this._GamesService.platform(this.platformType).subscribe({
          next: (res) => {
            console.log(res);
            this.platformArr = res;
            this.isLoading = false;
          }
        })
      }
    })
  }
// more games btn
  moreGame() {
    this.clicks++
    this.moreGames = 20 * this.clicks

  }
}
