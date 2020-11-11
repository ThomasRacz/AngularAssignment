import {Component, OnInit, EventEmitter, Output, ElementRef} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() refreshEvent = new EventEmitter<Content>();
  newContent: Content;
  status = '';
  idConst = 5;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  createContent(title: string, author: string, body: string): void {
    const addContentPromise = new Promise((success, fail) => {
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
        this.refreshEvent.emit(this.newContent);
        this.status = '';
        // set success callback
        success('Success');

      } else {
        this.status = 'Looks like you\'re missing some information! Make sure all fields have something in them!';
        // set fail callback
        fail('Failed to create a new content object, probably some fields are blank?');
      }
    });
    addContentPromise.then((success) => console.log(success), (fail) => console.log(fail));
  }
}
