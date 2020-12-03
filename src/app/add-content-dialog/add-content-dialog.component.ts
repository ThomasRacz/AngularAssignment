import {Component, ElementRef, OnInit} from '@angular/core';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent implements OnInit {

  constructor(private service: ContentService, private el: ElementRef) { }

  ngOnInit(): void {

  }
}
