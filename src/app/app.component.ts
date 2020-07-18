import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('quizform',{static:true}) quizForm:NgForm;
  default_sub = "advance";
  submitted:boolean = false;

  content={
    email:'',
    subscription:'',
    password:''
  }


  onSubmit(form:NgForm){
    console.log(form);
    this.content.email = this.quizForm.value.email;
    this.content.subscription = this.quizForm.value.subscription;
    this.content.password= this.quizForm.value.password;

    this.submitted = true;
  }
}
