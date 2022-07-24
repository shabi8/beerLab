import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PairService {

  private _foodToPairSource = new Subject<string>();
  foodToPair$ = this._foodToPairSource.asObservable();

  constructor() { }

  sendFoodToPair(food: string) {
    this._foodToPairSource.next(food);
  }
}
