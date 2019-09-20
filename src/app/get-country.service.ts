import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCountryService {
result;
  constructor(private _http : Http) { }



getCountryName(){
return this._http.get('/api/getCountries').map(result => this.result = JSON.parse(result.text()));

}

}
