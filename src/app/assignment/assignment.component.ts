import { Component, OnInit } from '@angular/core';
import {QuestionCategoryService} from '../question-category.service';
import  {Http, Headers, RequestOptions} from '@angular/http';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import { RouterModule, Router} from '@angular/router';

@Component({
  	selector: 'app-assignment',
  	templateUrl: './assignment.component.html',
  	styleUrls: ['./assignment.component.css']
})

export class AssignmentComponent implements OnInit {
	questionCategory;
  isOptionSelected;
  questionid;
  textBox;
  deletedRows;
  insertedRows;
  	constructor(private _http : Http, private _questioncatobj : QuestionCategoryService, private _router: Router) {
 		  this._questioncatobj.getQuestionCategory().subscribe(res=>this.questionCategory = res.data);
   	}

   	getValueInInputBox(event: Event) {
   		this.isOptionSelected = false;
   		if (this.questionid != 0) {
   			this.isOptionSelected = true;
		   	var options = event.srcElement['options'];
		   	var selectedOptionText = options[options.selectedIndex].text;
		   	this.textBox = selectedOptionText;
   		} else {
   			this.textBox = '';
   		}
   	}

    resetFormFields() {
      this.textBox = '';
      this._questioncatobj.getQuestionCategory().subscribe(res=>this.questionCategory = res.data);
      this.isOptionSelected = false;
    }

   	deleteOption() {
   		var selectedOption = this.questionid;
   		this._http.post('/api/deleteCategoryOption', {'selectedOption': selectedOption}).subscribe(
        res => this.deletedRows = JSON.parse(res.text()),
        (err) => console.log(err),
        () => (this.resetFormFields())
        )
   	}

    addOption() {
      var newOption = this.textBox;
      this._http.post('/api/addNewCategotyOption', {'newOption': newOption}).subscribe(
          res => this.insertedRows = JSON.parse(res.text()),
          (err) => console.log(err),
          () => {this.resetFormFields()}
        );
    }

  	ngOnInit() {
  
  	}

}
