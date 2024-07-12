import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat',
})
export class DateformatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // Check if the value is a valid date string
    if (!value) return value;

    // Create a Date object from the input string
    const date = new Date(value);

    // Options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    // Format the date using the options
    return date.toLocaleDateString('en-US', options);
  }
}
