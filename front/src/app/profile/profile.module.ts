import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';
import { CommentComponent } from '../components/comment/comment.component';
import { HeaderComponent } from '../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilePage,TabMenuComponent,CommentComponent,HeaderComponent]
})
export class ProfilePageModule {}
