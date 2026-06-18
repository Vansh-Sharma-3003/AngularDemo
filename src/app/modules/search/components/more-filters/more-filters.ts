import { Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-more-filters',
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    InputComponent,
    MatIconModule,
    MatSidenavModule,
  ],
  templateUrl: './more-filters.html',
  styleUrl: './more-filters.css',
})
export class MoreFilters {
  @ViewChild('drawer') drawer!: MatDrawer;
  filterForm: FormGroup;
  openDrawer: boolean = false;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search1: [''],
      search2: [''],
    
    });
  }

  onToggle() {
    this.drawer.toggle();
  }

  onApply() {
    this.drawer.close();
  }

  onClose() {
    this.drawer.close();
  }
}
