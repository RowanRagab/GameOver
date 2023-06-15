import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  catType: any;
  games: any[] = [];
  clicks: number = 1;
  moreGames: number = 20;

  isLoading = false;
  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {
  }
  // get link details and sent it to games as params to get specific category
  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.catType = param?.get('cat');
        this._GamesService.category(this.catType).subscribe({
          next: (res) => {
            setTimeout(() => {
              this.games = res
              this.isLoading = false;
            }, 1000);
          }
        })
      }
    })
  }
  // show more games btn fun>
  moreGame() {
    this.clicks++
    this.moreGames = 20 * this.clicks

  }
}
