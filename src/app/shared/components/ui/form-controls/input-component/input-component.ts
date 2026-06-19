import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlConfig } from '../../../../../model/ui/form-control';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
  
  @Input() formControlconfig!: FormControlConfig;

  value: any = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: any) {
    const value = event.target.value;
    this.value = value;
    this.onChange(value);
  }

  onBlur() {
    this.onTouched();
  }

}
