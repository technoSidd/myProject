import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { from } from 'rxjs';
import { QuestionCategoryService } from '../question-category.service';
import { GetUsersService } from '../get-users.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-assign-exam',
  templateUrl: './assign-exam.component.html',
  styleUrls: ['./assign-exam.component.css']
})
export class AssignExamComponent implements OnInit {
	categories;
	users;
	userName;
  constructor(private _QuestionCategoryService : QuestionCategoryService,private _GetUsersService : GetUsersService, private _http:Http) {

   this._QuestionCategoryService.getQuestionCategory()
   .subscribe(res=> this.categories = res.data);


 this._GetUsersService.getUsers()
   .subscribe(res=> this.users = res.data);


   }

   check(){

   	console.log(this.userName);
   }

  ngOnInit() {
  }

}
