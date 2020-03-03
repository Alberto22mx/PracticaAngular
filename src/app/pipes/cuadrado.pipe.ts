import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuadrado'
})
export class CuadradoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
