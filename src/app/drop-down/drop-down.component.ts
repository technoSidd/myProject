import { Component, OnInit } from '@angular/core';
import {GetCountryService} from '../get-country.service';
import  {Http, Headers, RequestOptions} from '@angular/http';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
countries;
countryid;
statesName;
stateid;
CitiesName;
  constructor(private _http : Http, private _getcountryobj : GetCountryService) {
  	this._getcountryobj.getCountryName().subscribe(res=>this.countries = res.data);
   }

   onChangeCountry(){
   	
   	this._http.post('/api/getStates',{'countryid' : this.countryid}).do(res=> console.log(JSON.parse(res.text()))).subscribe(res=> this.statesName = JSON.parse(res.text()).data);
   	//console.log(this.statesName);
   }


   
   onChangeState(){
   	
   	this._http.post('/api/getCities',{'stateid' : this.stateid}).do(res=> console.log(JSON.parse(res.text()))).subscribe(res=> this.CitiesName = JSON.parse(res.text()).data);
   	//console.log(this.statesName);
   }

  ngOnInit() {
  }

}
