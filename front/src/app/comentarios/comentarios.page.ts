import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { CommentServiceService } from '../services/comment-service/comment-service.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  
  commentForm: FormGroup;

  commentCreate: [];
  commentEdit: [];
  commentList: [];
  commentDelete: [];

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder, public commentService: CommentServiceService) {
    this.commentForm = this.formbuilder.group({
      comment:[null, [Validators.required, Validators.maxLength(300)]],
    })
   }

  ngOnInit() {
    this.postCreateComment();
    this.putEditComment();
    this.getListComment();
    this.delComment();
  }

  postCreateComment(){
    this.commentService.createComment().subscribe((res) => {
      this.commentCreate = res;
      console.log(this.commentCreate);
    });
  } 

  putEditComment(){
    this.commentService.editComment().subscribe((res) => {
      this.commentEdit = res;
      console.log(this.commentEdit);
    });
  }

  getListComment(){
    this.commentService.listComments().subscribe((res) => {
      this.commentList = res;
      console.log(this.commentList);
    });
  }

  delComment(){
    this.commentService.deleteComment().subscribe((res) => {
      this.commentDelete = res;
      console.log(this.commentDelete);
    });
  }

}
