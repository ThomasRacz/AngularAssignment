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
  public contentSize(): number {
    return this._content.length;
  }
  public displayContent(i: number): string {
    if (!(i > this.contentSize())) {
      return this._content[i].toString();
    } else {
      return '<h1>Something went wrong<h1>';
    }
  }
  constructor(){
    this._content = [];
  }

}


