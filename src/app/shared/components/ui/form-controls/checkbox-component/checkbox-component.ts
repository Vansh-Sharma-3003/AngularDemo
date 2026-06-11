import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule],
  templateUrl: './checkbox-component.html',
  styleUrl: './checkbox-component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() options: { label: string, value: any }[] = [];

  value: any[] = [];

  isOpen = false;

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any[]): void {
    this.value = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleSelection(optionValue: any) {

    if (this.value.includes(optionValue)) {
      this.value = this.value.filter(v => v !== optionValue);
    } else {
      this.value = [...this.value, optionValue];
    }

    this.onChange(this.value);
  }

  isSelected(value: any): boolean {
    return this.value.includes(value);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onTouchedOutside() {
    this.isOpen = false;
    this.onTouched();
  }


}
