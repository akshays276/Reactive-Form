import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})

export class AppComponent 
{
// Inject FormBuilder service
constructor(public fbobj : FormBuilder)
{}
contactForm = this.fbobj.group({
  fname : new FormControl('',[Validators.required]),
  lname : new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required]),
  phone : new FormControl('',[Validators.required,Validators.minLength(10)]),
  address : new FormControl('',[Validators.required]),
  city : new FormControl('',[Validators.required]),
  state : new FormControl('',[Validators.required]),
  zipcode : new FormControl('',[Validators.required,Validators.minLength(5)]),
  comments : new FormControl('',[Validators.required,Validators.minLength(30)])
});
onSubmit() 
{
  console.log('Form submitted!', this.contactForm.value);
}
}
