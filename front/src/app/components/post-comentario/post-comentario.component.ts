import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-post-comentario',
  templateUrl: './post-comentario.component.html',
  styleUrls: ['./post-comentario.component.scss'],
})
export class PostComentarioComponent implements OnInit {

  @Input() comment;
  

  constructor() { }

  ngOnInit() {}

}
