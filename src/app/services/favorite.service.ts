import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  // private _favoriteBeersListSource = new Subject<string[]>();
  // favoriteBeersList$ = this._favoriteBeersListSource.asObservable();

  favoriteBeerList: any = [];

  constructor() {
    console.log("SERVU")
    const favBeers = localStorage.getItem("FAVBEERS");
    console.log(favBeers)
    if (favBeers){
      this.favoriteBeerList = favBeers.split(',').map(Number);
    }
    console.log(this.favoriteBeerList)
  }

  addBeerToFavList(beerId: string) {
    this.favoriteBeerList.push(beerId);
    console.log(this.favoriteBeerList)
    localStorage.setItem("FAVBEERS", this.favoriteBeerList.toString())
    console.log(localStorage.getItem("FAVBEERS"))
  }

  getFavoriteBeerList() {
    return this.favoriteBeerList;
  }

  clearFavoriteList() {
    this.favoriteBeerList = [];
    localStorage.removeItem("FAVBEERS")
  }

  beerExistsInList(beerId: string) {
    console.log(beerId, this.favoriteBeerList.includes(beerId))
    return this.favoriteBeerList.includes(beerId)
  }

  removeBeerFromFavoriteList(beerId: string) {
    if (this.beerExistsInList(beerId)) {
      const beerIndex = this.favoriteBeerList.findIndex((el: string) => el === beerId);
      this.favoriteBeerList.splice(beerIndex, 1);
    }
    localStorage.setItem("FAVBEERS", this.favoriteBeerList.toString())
  }
}
