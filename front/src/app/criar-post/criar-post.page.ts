import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.page.html',
  styleUrls: ['./criar-post.page.scss'],
})
export class CriarPostPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) { 
    this.registerForm = this.formbuilder.group({
      text: [null, [Validators.required]]
    })
   }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }
}
