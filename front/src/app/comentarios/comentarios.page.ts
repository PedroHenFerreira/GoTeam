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

  newComment: [];
  commentEdit: [];
  commentsList: [];
  commentDelete: [];
  postId = localStorage.getItem('postId');

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder, public commentService: CommentServiceService) {
    this.commentForm = this.formbuilder.group({
      bodyText:[null, [Validators.required, Validators.maxLength(300)]],
    })
   }

  ngOnInit() {
    console.log(this.postId);
    this.listComment();

  }

  createComment(form){
    console.log(form.value);
    this.commentService.createComment(form.value,this.postId).subscribe((res) => {
      this.newComment = res;
      this.commentForm.reset();
      this.listComment();
      console.log(this.newComment);
    });
  } 

  editComment(form, id){
    console.log(form.value)
    this.commentService.editComment(id,form.value).subscribe((res) => {
      console.log(res);
    });
  }

  listComment(){
    this.commentService.listComments(this.postId).subscribe((res) => {
      this.commentsList = res.Sucesso;
      console.log(this.commentsList);
    });
  }

  delComment(id){
    this.commentService.deleteComment(id).subscribe((res) => {
      console.log(res);
    });
  }

}
