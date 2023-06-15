import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.scss']
})
export class SortbyComponent {
  sortbyType: any;
  sortbyArr: any[] = [];
  isLoading: boolean = false;
  clicks: number = 1;
  moreGames: number = 20;
    // get soted data from active route and send it to service
  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesService: GamesService, private _Router: Router) {
    this.isLoading = true
    _ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.sortbyType = params.get('sortby');
        console.log(params.get('sortby'));
        setTimeout(() => {
          this._GamesService.getSortedGames(this.sortbyType).subscribe({
            next: (res) => {
              this.sortbyArr = res;
              this.isLoading = false;
            },
            error: (err) => {
              console.log(err);

            }
          })
        }, 1000);
      }
    })
  }
// more games btn
  moreGame() {
    this.clicks++
    this.moreGames = 20 * this.clicks
  }
}
