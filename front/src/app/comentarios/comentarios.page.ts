import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  
  commentForm: FormGroup;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.commentForm = this.formbuilder.group({
      comment:[null, [Validators.required, Validators.maxLength(300)]],
    })
   }

  ngOnInit() {
  }

}
