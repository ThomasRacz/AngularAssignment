import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  // content below

  someContent: Content[];
  constructor(private service: ContentService) {
  }

  ngOnInit(): void {
    this.service.observableContent().subscribe(content => {
      this.someContent = content;
    });
  }

  // Filter Methods
  filterContentByTitle(title: string): void {
    // sanitizing the input so its not case sensitive
    const filteredContent = this.someContent.filter(c => c.title.toLowerCase() === title.toLowerCase());
    if (filteredContent.length > 0) {
      alert('There is content with that title!');
    } else {
      alert('There wasn\'t any content with that title!');
    }
  }

  clone(content: Content): void{
    this.someContent.push(content);
    this.someContent = Object.assign([], this.someContent);
  }
}
