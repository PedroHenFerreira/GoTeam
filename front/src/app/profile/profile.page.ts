import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  commentForm: FormGroup;
  user: string = "user";
  player: string = "player";
  status: string = "user";
  id: boolean = true;

  userStatus():boolean {
    if (this.status === this.user){
      return this.id;
    }
    else if(this.status === this.player){
      this.id = false;
      return this.id;
    }
  }

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
