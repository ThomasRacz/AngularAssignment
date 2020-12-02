import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() refreshEvent = new EventEmitter<Content>();
  newContent: Content;
  status = '';
  idConst = 5;
  constructor(private el: ElementRef, private contentService: ContentService) {}

  ngOnInit(): void {
  }

  createContent(title: string, author: string, body: string): void {
    let contentObject: Content;
    if (title !== '' || author !== '' || body !== '') {
      this.idConst ++;
      this.newContent = {
        author,
        body,
        id: this.idConst,
        title,
        type: ''
      };
      // get all the form fields and clear them when we are able to create a new piece of content
      const titleInput = this.el.nativeElement.querySelector('#titleInput');
      const authorInput = this.el.nativeElement.querySelector('#authorInput');
      const bodyInput = this.el.nativeElement.querySelector('#bodyInput');
      titleInput.value = '';
      authorInput.value = '';
      bodyInput.value = '';
      // log that we made some new content
      console.log('Created ' + this.newContent.title);
      // use the output event to send the data over
      this.contentService.addItem(this.newContent).subscribe(object => {
        contentObject = object;
        this.refreshEvent.emit(contentObject);
      });
      this.status = '';
    } else {

    }
  }

}
