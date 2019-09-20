import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { from } from 'rxjs';
import { GetResumeService } from '../get-resume.service';
// import { map } from "rxjs/operators";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent implements OnInit {

resumes: Array<any>;
resumes2: string;
nameId;
msgg;
  constructor(private _GetResumeService: GetResumeService,private _http: Http) {

 this._GetResumeService.getUsers()
      .subscribe(res => this.resumes = res.data);
      // console.log('in component-', res);

  }


  ngOnInit() {}

// selectName()
// {
//  this._http.post('/api/resumedetail', {'nameId':this.nameId}).subscribe(res =>{ 
//   this.msgg = JSON.parse(res.text());
// }


 selectName() {
       this._http.post('/api/resumedetail', {'nameId':this.nameId}).subscribe(res =>{ 
  this.msgg = JSON.parse(res.text());
 console.log(this.msgg);
  
  });

    
   }


}
