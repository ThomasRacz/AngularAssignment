import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {AddContentDialogComponent} from '../add-content-dialog/add-content-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

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
  constructor(private el: ElementRef, private contentService: ContentService, private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  createContent(title: string, author: string, body: string): void {
    console.log('HERE IS THE DATA' + title + ' ' + author + ' ' + body);
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
      // log that we made some new content
      console.log('Created ' + this.newContent.title);
      // use the output event to send the data over
      try {
        this.contentService.addItem(this.newContent).subscribe(object => {
          contentObject = object;
          this.refreshEvent.emit(contentObject);
        });
      } catch (e) {
        console.log(e);
      }

      this.status = '';
    } else {

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddContentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      // pass the array of data from the dialog to the create function
      this.createContent(result[0], result[1], result[2]);
    });
  }
}
