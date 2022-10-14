import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstLetter'
})
export class GetFirstLetterPipe implements PipeTransform {

  transform(value: string): any {
    const firstLetter = value
      .split(' ')
      .map((x) => x[0])
      .join('')

    // if (firstLetter){

    // }
    return firstLetter;
  }

}
