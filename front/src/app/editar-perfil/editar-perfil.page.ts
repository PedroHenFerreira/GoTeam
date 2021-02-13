import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

// class champions{  
//   championsList: string[];
//   }

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})


export class EditarPerfilPage implements OnInit {

  editProfileForm: FormGroup;

  

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  
//   champions: [
//     'Annie',
//     'Garen',
//     'jhin', 
//     'Hecarim', 
//     'Rammus', 
//     'Shaco', 
//     'Yasuo' 
// ]

  constructor(public formbuilder: FormBuilder) { 
    this.editProfileForm = this.formbuilder.group({
      username: [null, [Validators.required, Validators.maxLength(20)]],
      profilePicture:[null],
      backgroundImage:[null],
      mainLane:[null],
      secondaryLane:[null],
      postPrivacy:[null],
      commentPrivacy:[null]
         
    });

  }

  ngOnInit() {
    
  }

}
