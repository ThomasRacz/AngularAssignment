import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[] = [];

  // i hate typedef linting errors
  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

}
