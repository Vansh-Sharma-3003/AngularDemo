import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SelectComponent } from '../../../../shared/components/ui/form-controls/select-component/select-component';
import { FilterConfig } from '../../../../model/ui/form-control';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-more-filters',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    MatIconModule,
    MatSidenavModule,
    SelectComponent,
    MatBadgeModule
  ],
  templateUrl: './more-filters.html',
  styleUrl: './more-filters.css',
})
export class MoreFilters {

  applyFiltersCount = 0;

  @Input() filterConfig: FilterConfig | null = null;

  @Output() applyFilters = new EventEmitter<any>();

  @ViewChild('drawer') drawer!: MatDrawer;

  moreFilterForm: FormGroup = new FormGroup({
    responseType: new FormControl(null),
    leader: new FormControl(null),
    teamLeader: new FormControl(null),
    queueTpye: new FormControl(null),
    candidateId: new FormControl(null),
    feedback: new FormControl(null)
  });




  get moreFilters() {
    return {
      responseType: { key: 'responseType', label: 'Response Type', placeholder: 'Search by Response Type' },
      leader: { key: 'leader', label: 'Leader', options: this.filterConfig?.leader, defaultOptionLabel: 'ALL' },
      teamLeader: { key: 'teamLeader', label: 'Team Leader', options: this.filterConfig?.teamLeader, defaultOptionLabel: 'ALL' },
      feedback: { key: 'feedback', label: 'Feedback', options: this.filterConfig?.feedback, defaultOptionLabel: 'ALL' },
      candidateId: { key: 'candidateId', label: 'Candidate Id', placeholder: 'Search by Candidate Id' },
      queueTpye: { key: 'queueTpye', label: 'Queue Tpye', options: this.filterConfig?.queueTpye, defaultOptionLabel: 'ALL' }
    }
  }
  onToggle() {
    this.drawer.toggle();
  }

  onApply(): void {
    const formValues = this.moreFilterForm.value;

    this.applyFiltersCount = Object.values(formValues).filter(value => {
      return value !== null &&
        value !== undefined &&
        value !== '' &&
        !(Array.isArray(value) && value.length === 0);
    }).length;

    this.applyFilters.emit(this.moreFilterForm.value);
    this.drawer.close();
  }

  onClose() {
    this.drawer.close();
  }

  onClear(): void {
    this.moreFilterForm.reset();
    this.applyFiltersCount = 0;
    console.log(this.moreFilterForm.value);
  }

  resetForm() {
    this.moreFilterForm.reset();
    this.applyFiltersCount = 0;

  }
}

