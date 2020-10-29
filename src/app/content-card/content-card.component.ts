import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;
  constructor() {

  }
  // function for displaying the contents id in the console when clicking the image
  titleStyle = 'title';
  tagsStyle = 'tags';
  revealContentID(): void {
    console.log('This contents ID: ' + this.content.id);
  }

  ngOnInit(): void {
  }

}
