import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { SelectComponent } from '../../../../shared/components/ui/form-controls/select-component/select-component';
import { MatIcon } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
@Component({
  selector: 'app-search',
  imports: [InputComponent, ReactiveFormsModule, SelectComponent, MatIcon, MatMenuModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  fields = {
    name: {
      placeholder:'',
      label: ''
    }
  }

  searchFrom!: FormGroup;
  mobileQuery: any;
snav: any;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.searchFrom = this.fb.group({
      checkbox:[[]],
      status:['all'],
      search: ['']
    });
  }

  onSubmit() {
    console.log('Search value:', this.searchFrom.value);
  }
}
