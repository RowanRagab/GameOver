import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
  all: any[] = [];  // all games arr
  broweseGames: any = [];
  windowsGames: any = [];
  isLoading: boolean = false;
  moreGames: number = 20;
  clicks: number = 1;

  // get games apis from games service
  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {
    this.isLoading = true
    _GamesService.allGames().subscribe({
      next: (res) => {
        this.all = res;
        this.isLoading = false;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  // more games btn function
  moreGame() {
    this.clicks++
    this.moreGames = 20 * this.clicks

  }

}
