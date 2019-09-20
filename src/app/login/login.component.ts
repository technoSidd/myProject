import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formdata;
uname;
passwd;
msgg;
role;
  constructor(private router: Router,private _http: Http) { }

  ngOnInit() {
  	this.formdata = new FormGroup({
         uname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(5)
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
  }

    passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 4) {
         return {"passwd" : true};
      }
   }
   
   onClickSubmit() {
      this._http.post('/api/login', {'uname':this.uname,'pass':this.passwd}).subscribe(res =>{ 
  this.msgg = JSON.parse(res.text());
  console.log(this.msgg);
  if( this.msgg.msg == "valid" ){
    this.role = this.msgg.data[0].role;
    if( this.role == '1' ){
      this.router.navigate(['/adminDashboard']);
    }else if( this.role == '2' ){
      this.router.navigate(['/studentDashboard']);
    }
    else if( this.role == '3' ){
      this.router.navigate(['/hodDashboard']);
    }
  }
  
  });

    
   }

}
