import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { IBeer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerModalService {

  private _beerToModalSource = new Subject<IBeer>();
  foodToPair$ = this._beerToModalSource.asObservable();

  constructor() { }

  sendBeerToModal(beer: IBeer) {
    this._beerToModalSource.next(beer);
  }
}
