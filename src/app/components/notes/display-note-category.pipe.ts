import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'DisplayNoteCategory'
})
export class DisplayNoteCategory implements PipeTransform{

  transform(value: number) : string {
    switch(value){
      case 0: return 'All'
      case 1: return 'Docker CLI'
      case 10: return 'Linux'
      case 50: return 'JavaScript'
      case 90: return 'AWS'
      case 95: return 'Agile'
      case 100: return 'General'

      default: return value.toString();
    }
  }
}
