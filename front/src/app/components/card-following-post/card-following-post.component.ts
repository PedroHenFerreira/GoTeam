import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostServiceService } from '../../services/post-service/post-service.service';

@Component({
  selector: 'app-card-following-post',
  templateUrl: './card-following-post.component.html',
  styleUrls: ['./card-following-post.component.scss'],
})
export class CardFollowingPostComponent implements OnInit {

  @Input() post;
  @Input() user;
  @Output() deleted = new EventEmitter<string>();

  constructor(public postService: PostServiceService) { }

  ngOnInit() {}

  deletePost(id){
    this.postService.deletePost(id).subscribe((res) => {
      console.log(res);
      this.deleted.emit("Post deletado");
    })
  }
}
