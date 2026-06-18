import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { SelectComponent } from '../../../../shared/components/ui/form-controls/select-component/select-component';

@Component({
  selector: 'app-top-filters',
  imports: [ReactiveFormsModule,InputComponent,SelectComponent],
  templateUrl: './top-filters.html',
  styleUrl: './top-filters.css',
})
export class TopFilters {

  searchFrom!: FormGroup;
  config = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFrom = this.fb.group({
      checkbox: [[]],
      status: ['all'],
      search: ['']
    });
  }

  onSubmit() {
    console.log('Search value:', this.searchFrom.value);
  }

}
