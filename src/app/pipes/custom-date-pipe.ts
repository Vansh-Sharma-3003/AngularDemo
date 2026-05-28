import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {

    if (!value) return '';

    const date = new Date(value);
    const month = date.toLocaleString('en-US', {
      month: 'short',
      timeZone: 'UTC'
    });
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${month}-${day}-${year}-${hours}:${minutes}`;
  }
}
