import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { from } from 'rxjs';
import { QuestionCategoryService } from '../question-category.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
categories;
questionCategory;
question;
answerOne;
answerTwo;
answerThree;
answerFour;
isCorrect;
msgg;
 CurrentDate = new Date();
  constructor(private _QuestionCategoryService : QuestionCategoryService, private _http:Http) {

   this._QuestionCategoryService.getQuestionCategory()
   .subscribe(res=> this.categories = res.data);

   }

  ngOnInit() {}

  onSubmitExam(){
  	// console.log('m here');
  	this._http.post('/api/addExam',{
  	  'CurrentDate' : this.CurrentDate,	
  	  'type_question': this.questionCategory,
      'question' : this.question,
      'answerOne': this.answerOne,
      'answerTwo':this.answerTwo,
      'answerThree': this.answerThree,
      'answerFour' : this.answerFour,
      'isCorrect' : this.isCorrect}).subscribe(res =>{  this.msgg = JSON.parse(res.text());
  });

}
}