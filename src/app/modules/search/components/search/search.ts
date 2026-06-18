import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { MoreFilters } from '../more-filters/more-filters';
import { TopFilters } from "../top-filters/top-filters";
@Component({
  selector: 'app-search',
  imports: [ ReactiveFormsModule, MatMenuModule, MatSidenavContainer, MoreFilters, TopFilters],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  fields = {
    name: {
      placeholder: '',
      label: ''
    }
  }

  searchFrom!: FormGroup;

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
