import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SelectComponent } from '../../../../shared/components/ui/form-controls/select-component/select-component';
import { FilterConfig } from '../../../../model/ui/form-control';
@Component({
  selector: 'app-more-filters',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    MatIconModule,
    MatSidenavModule,
    SelectComponent
  ],
  templateUrl: './more-filters.html',
  styleUrl: './more-filters.css',
})
export class MoreFilters {

  @Input() filterConfig : FilterConfig |null = null;

  @ViewChild('drawer') drawer!: MatDrawer;

  moreFilterForm: FormGroup = new FormGroup({
    responseType : new FormControl(null),
    leader : new FormControl(null),
    teamLeader : new FormControl(null),
    queueTpye : new FormControl(null),
    candidateId : new FormControl(null),
    feedback : new FormControl(null)
  });


  get moreFilters(){
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

  onApply() {
    this.drawer.close();
  }

  onClose() {
    this.drawer.close();
  }
}
