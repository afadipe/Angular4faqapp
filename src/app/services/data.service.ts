import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];
  constructor() {
    // this.questions=[
    //   {
    //     text:'What is your name?',
    //     answer:'My name is Ayobami',
    //     hide:true
    //   },
    //   {
    //     text:'What is your favorite color?',
    //     answer:'My favoutite color is red',
    //     hide:true
    //   },
    //   {
    //     text:'What is your favorite language?',
    //     answer:'My favoutite language is C#',
    //     hide:true
    //   }
    // ];
}

getQuestions(){
  if(localStorage.getItem('question') === null){
   this.questions=[];
  }else{
  this.questions= JSON.parse(localStorage.getItem('question'));
  }
  return this.questions;
}

addQuestion(question:Question){

  this.questions.unshift(question);
  //initial local store
  let questions;
  if(localStorage.getItem('question') === null)
  {
    questions=[];
   }
   else
   {
    questions= JSON.parse(localStorage.getItem('question'));
   }
 //push new qtn into LS
   questions.unshift(question);
   //set new array to local storage
   localStorage.setItem('question',JSON.stringify(questions));
}

removeQuestion(question:Question){

  for(let i=0; this.questions.length;i++){
    if(question==this.questions[i])
    {
      this.questions.splice(i,1);
      localStorage.setItem('question',JSON.stringify(this.questions));
    }

  }
}

}
