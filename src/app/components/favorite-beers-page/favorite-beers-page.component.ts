import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBeer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-beers-page',
  templateUrl: './favorite-beers-page.component.html',
  styleUrls: ['./favorite-beers-page.component.css']
})
export class FavoriteBeersPageComponent implements OnInit {

  favoriteBeersIds!: string[];
  beers$!: Observable<IBeer[]>;

  constructor(private favorite: FavoriteService, private beerService: BeerService) { }

  ngOnInit(): void {
    console.log("FAVPAGE")
    // const favBeers = localStorage.getItem("FAVBEERS");
    // if (favBeers) {
    //   console.log(favBeers)
    //   this.favoriteBeersIds = favBeers.split(',');
    //   console.log(this.favoriteBeersIds)
    // } else {
    //   this.favoriteBeersIds = this.favorite.getFavoriteBeerList()
    // }
    this.favoriteBeersIds = this.favorite.getFavoriteBeerList()
    this.beers$ = this.beerService.getAllBeersByIdList(this.favoriteBeersIds);
  }


}
