import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Question} from '../../models/Question';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
@Output() questionAdded= new EventEmitter<Question>();

  text:string;
  answer:string;

  constructor(public dataservice : DataService) { }

  ngOnInit() {
  }

  addQuestion(){

    this.questionAdded.emit({text:this.text,answer:this.answer,hide:true});
  }

}
