import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: [];

  loginForm: FormGroup;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder, public authenticationService: AuthenticationServiceService) { 
    this.loginForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
  }

  loginUser(){
    this.authenticationService.userLogin().subscribe((res) => {
      this.login = res;
      console.log(this.login);
    });
  }

}
