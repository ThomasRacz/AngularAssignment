import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {someContentDB} from '../helper-files/contentDB';
import {MessageService} from '../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  addItem(content: Content): Observable<Content>{
    this.messageService.add('Added Content');
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
  observableContent(): Observable<Content[]>{
    this.messageService.add('Content retrieved!');
    // return of(someContentDB);
    return this.http.get<Content[]>('api/content');
  }
}
