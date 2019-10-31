import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibeer } from '../ibeer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }
  private _url: string = "https://api.punkapi.com/v2/beers";

  getAll(): Observable<Ibeer[]>{
    return this.http.get<Ibeer[]>(this._url);
  }
}
