import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPostPageRoutingModule } from './editar-post-routing.module';

import { EditarPostPage } from './editar-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarPostPageRoutingModule
  ],
  declarations: [EditarPostPage]
})
export class EditarPostPageModule {}
