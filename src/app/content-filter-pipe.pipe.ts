import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'contentFilterPipe'
})
export class ContentFilterPipePipe implements PipeTransform {

  // our pipes filter method.
  transform(content: Content[], filteredType: string): Content[] {
    // cant use the same variable name in a local and contained scope which is interesting. (no-shadowing-variable)
    // I'm surprised that TSLint would complain about that

    // filter the content in the array by the contents type property and return it.
    const filteredContent = content.filter(c => c.type?.includes(filteredType));
    console.log(filteredContent);
    return filteredContent;
  }

}
