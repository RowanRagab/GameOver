import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aboutGame'
})
export class AboutGamePipe implements PipeTransform {

  transform(word:string): string {
    return `About ${word}`;
  }

}
