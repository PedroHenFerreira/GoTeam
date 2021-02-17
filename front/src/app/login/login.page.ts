import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginArray: [];

  loginForm: FormGroup;

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder, public authenticationService: AuthenticationServiceService) { 
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
  }

  login(form){
    console.log(form.value);
    this.authenticationService.login(form.value).subscribe((res) => {
      console.log(res);
      localStorage.setItem('userToken', res.token);
    });
  }
  // 
}
