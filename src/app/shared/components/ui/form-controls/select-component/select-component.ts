import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlConfig } from '../../../../../model/ui/form-control';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select-component.html',
  styleUrl: './select-component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  @Input() formControlconfig!: FormControlConfig;

  value: any = '';

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.value = value;
    this.onChange(value);
  }
}
