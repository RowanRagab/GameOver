import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  header: any = {
    'X-RapidAPI-Key': '38006aabb8msh233d76f7848c398p15a602jsn9e73cd6b9035',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
  constructor(private _HttpClient: HttpClient) { }
  // All games
  allGames(): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
      { headers: this.header }
    )
  }

  // game details 
  gameDetails(id: string): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        headers: this.header
        ,
        params: { id }
      }
    )
  }

  // get  platform type
  platform(platform: string): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        headers: this.header
        ,
        params: {platform: platform }
      }
    )
  }

  // get category
  category(category: string): Observable<any> {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        headers: this.header
        ,
        params: { category }
      }
    )
  }

    // get SortedGames
    getSortedGames(SortedGames: string): Observable<any> {
      return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          headers: this.header
          ,
          params: {'sort-by': SortedGames }
        }
      )
    }
}
