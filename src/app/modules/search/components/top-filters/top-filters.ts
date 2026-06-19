import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { SelectComponent } from '../../../../shared/components/ui/form-controls/select-component/select-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-filters',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent
  ],
  templateUrl: './top-filters.html',
  styleUrl: './top-filters.css',
})
export class TopFilters {

  topFilterForm: FormGroup = new FormGroup({
    searchType: new FormControl(null),
    nameId: new FormControl(null),
    searchResult: new FormControl(null),
    status: new FormControl(null),
    responseId: new FormControl(null),
  });

  searchResult = [
    { key: 'active', value: 'Active' },
    { key: 'inactive', value: 'Inactive' }
  ]

  searchType = [
    { key: 'active', value: 'Active' },
    { key: 'inactive', value: 'Inactive' }
  ]

  status = [
    { key: 'active', value: 'Active' },
    { key: 'inactive', value: 'Inactive' }
  ]
  
  get topFilters() {
    return {
      searchType: { key: 'searchType', label: 'Search Type', options: this.searchType, defaultOptionLabel: 'ALL' },
      nameId: { key: 'nameId', label: 'Name/Id', placeholder: 'Search by name/id' },
      status: { key: 'status', label: 'Status', options: this.status, defaultOptionLabel: 'ALL' },
      searchResult: { key: 'searchResult', label: 'Search Result', options: this.searchResult, defaultOptionLabel: 'ALL' },
      responseId: { key: 'responseId', label: 'Response Id', placeholder: 'Enter Value' }
    }
  }


  onSubmit() {
    console.log('Search value:', this.topFilterForm.value);
  }

}
