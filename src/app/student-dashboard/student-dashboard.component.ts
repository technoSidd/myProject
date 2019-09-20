import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
formdata;
name;
qualification;
skills;
experience;
phone;
msgg;
  constructor(private router: Router,private _http: Http) { }

  ngOnInit() {
  }



 onSubmitResume() {
 	console.log('m here');
      this._http.post('/api/uploadResume', {'name':this.name,'qualification':this.qualification,'skills':this.skills,'experience':this.experience,'phone':this.phone})
      .subscribe(res =>{  this.msgg = JSON.parse(res.text());
      	//console.log(this.msgg.msg);
      
 
  
  });

    
   }


}
