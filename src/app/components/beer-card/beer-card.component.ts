import { Component, Input, OnInit } from '@angular/core';
import { IBeer } from 'src/app/models/beer';
import { BeerModalService } from 'src/app/services/beer-modal.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {
  
  @Input()
  beer!: IBeer;


  constructor(private favoriteService: FavoriteService, private beerModalService: BeerModalService) { }

  ngOnInit(): void {
  }

  addToFavorites(beerId: string) {
    this.favoriteService.addBeerToFavList(beerId);
  }

  removeFromFavorites(beerId: string) {
    this.favoriteService.removeBeerFromFavoriteList(beerId);
  }

  openBeerModal() {
    this.beerModalService.sendBeerToModal(this.beer);
  }


  get isItAfavoriteBeer(){
    return this.favoriteService.beerExistsInList(this.beer.id)
  }

}
