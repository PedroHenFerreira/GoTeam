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
  commentList: [];
  commentDelete: [];

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
    
    this.delComment(5);
  }

  createComment(form,id){
    console.log(form.value);
    this.commentService.createComment(form.value,id).subscribe((res) => {
      this.newComment = res;
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
    this.commentService.listComments().subscribe((res) => {
      this.commentList = res;
      console.log(this.commentList);
    });
  }

  delComment(id){
    this.commentService.deleteComment(id).subscribe((res) => {
      console.log(res);
    });
  }

}
