import { Component, Input, OnInit } from '@angular/core';
import { IBeer } from 'src/app/models/beer';
import { BeerModalService } from 'src/app/services/beer-modal.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.css']
})
export class BeerModalComponent implements OnInit {

  beer!: IBeer;
  isVisible: boolean = false;

  constructor(private beerModalService: BeerModalService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.beerModalService.foodToPair$.subscribe(beer => {
      this.beer = beer;
      this.isVisible = true;
    }) 
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  removeFromFavorites(beerId: string) {
    this.favoriteService.removeBeerFromFavoriteList(beerId);
  }

  addToFavorites(beerId: string) {
    this.favoriteService.addBeerToFavList(beerId);
  }

  get isItAfavoriteBeer(){
    return this.favoriteService.beerExistsInList(this.beer.id)
  }

}
