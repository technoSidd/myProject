import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {
	 result:Array<any>;

   constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/getResume")
      .map(result => this.result = JSON.parse(result.text()));
  }
}
