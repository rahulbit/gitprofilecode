import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    if(!args )
    {
    return value;
    }

    args =args.toLowerCase();

    return value.filter(items=>{
       return items.name.toLowerCase().startsWith(args)==true;
    })
  }

}
