import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleantitle'
})
export class CleantitlePipe implements PipeTransform {

  transform(value: any): any {

    let letterNumber = /^[0-9a-zA-Z]+$/;
    let amount = value.length;
    let rr;
    rr = value.replace(/^[0-9a-zA-Z]+$/g,"");
    // for (let index = 0; index < amount; index++) {
    //   const element = value[index];
    //   if(!letterNumber.test(element)){
    //     rr = value.replace(element,'');
    //   }
    // }
    return rr;
  }

}
