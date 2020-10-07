import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  // content declarations
  content1: Content = {
    author: 'A name here',
    body: 'Here is some sort of content I guess?',
    id: 0,
    title: 'Some test content',
    tags: ['Tag1', 'Tag 2'],
    type: 'SomeType'
  };
  content2: Content = {
    author: 'A second name here',
    body: 'More content?',
    id: 1,
    title: 'Some more test content',
    tags: ['Tag1', 'Tag 2'],
    type: 'SomeType'
  };
  content3: Content = {
    author: 'A third name here',
    body: 'Maybe even more content????',
    id: 2,
    title: 'Even more test content'
  };
  // content list container declaration
  cl: ContentList;
  constructor() {
    this.cl = new ContentList();
    this.cl.addContent(this.content1);
    this.cl.addContent(this.content2);
    this.cl.addContent(this.content3);
  }

  ngOnInit(): void {
  }

}
