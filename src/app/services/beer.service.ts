import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBeer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private url = 'https://api.punkapi.com/v2/beers';
  private randomUrl = 'https://api.punkapi.com/v2/beers/random'

  constructor(private http: HttpClient) { }

  getAllBeers(): Observable<IBeer[]>{
    return this.http.get<IBeer[]>(this.url);
  }

  getRandomBeer(): Observable<IBeer>{
    return this.http.get<IBeer>(this.randomUrl)
  }

  getAllPageBeer(page: number) {
    const params = new HttpParams()
      .set("page", page)
      .set("per_page", 12);
    return this.http.get<IBeer[]>(this.url, {params});
  }

  getAllBeersByIdList(beerIdList: string[]): Observable<IBeer[]> {
    const beersIds = beerIdList.toString().replace(/,/g, '|');
    console.log(beersIds);
    const params = new HttpParams()
      .set("ids", beersIds)
    return this.http.get<IBeer[]>(this.url, {params});
  }

  getBeersThatPairWith(food_pairing: string) {
    const foodPairing = food_pairing.replace(/ /g, '_');
    console.log(foodPairing);
    const params = new HttpParams()
      .set("food", foodPairing);
    return this.http.get<IBeer[]>(this.url, {params});
  } 
}
