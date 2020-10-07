import {Content} from './content-interface';

export class ContentList {
  // tslint:disable-next-line:variable-name
  private _content: Content[]; // content array
  public get getContent(): Content[] {
    return this._content;
  }
  addContent(content: Content): void {
    this._content.push(content); // add element to end of array
  }
  public contentSize(): number {  // return length of array
    return this._content.length;
  }
  public displayContent(index: number): string {
    // this is for the bonus of the assignment
    let prettyContent = '';
    // try to get the content from the array, handle any errors by catching them and displaying them on the pages
    try {
      prettyContent += '<h1>' + this._content[index].title + '</h1>';
      prettyContent += '<h2>' + this._content[index].author + '</h2>';
      prettyContent += '<p>' + this._content[index].body + '</p>';
      prettyContent += '<p>' + this._content[index].tags + '</p>';
      prettyContent += '<p>' + this._content[index].type + '</p>';
    }
    catch (e) {
      prettyContent += '<h2>Whoops! Couldn\'t find the content you were looking for.</h2>';
      prettyContent += '<h3> Here\'s some error info: ' + e + '</h3>';
    }
    return prettyContent;
  }
  constructor(){
    this._content = [];
  }

}


