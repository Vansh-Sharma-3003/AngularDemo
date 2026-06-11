import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { DropdownComponent } from "../../../../shared/components/ui/form-controls/dropdown-component/dropdown-component";
import { CheckboxComponent } from "../../../../shared/components/ui/form-controls/checkbox-component/checkbox-component";

@Component({
  selector: 'app-search',
  imports: [InputComponent, ReactiveFormsModule, DropdownComponent, CheckboxComponent],
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
