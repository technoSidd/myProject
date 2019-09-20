import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { from } from 'rxjs';
import { DataService } from '../data.service';
// import { map } from "rxjs/operators";
import { map } from 'rxjs/operators';
// import { from } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
   users: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getUsers()
      .subscribe(res => this.users = res);

  }


  ngOnInit() {
  }

}
