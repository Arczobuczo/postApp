import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post.modul';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[] = [
    {
      userId: 1,
      id: 1,
      title: 'ipsmum',
      body: 'lorem'
    },
    {
      userId: 2,
      id: 2,
      title: 'ipsmum2',
      body: 'lorem2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
