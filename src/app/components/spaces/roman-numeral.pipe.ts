import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'romanNumeral' })
export class RomanNumeralPipe implements PipeTransform {
  transform(value: number): string {
    const intValue = Math.floor(value);

    if (intValue < 1 || intValue > 16) {
      return 'Invalid input';
    }

    const romanNumerals = [
      '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'
    ];

    return romanNumerals[intValue];
  }
}