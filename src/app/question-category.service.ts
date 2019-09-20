import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionCategoryService {
	result: Array<any>;

  constructor(private _http:Http) { }

  getQuestionCategory(){
  	return this._http.get('/api/getQuestionCategory')
  	.map(result => this.result = JSON.parse(result.text()));
  }
}
