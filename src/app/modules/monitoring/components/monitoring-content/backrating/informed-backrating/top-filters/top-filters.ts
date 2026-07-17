import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { InputComponent } from '../../../../../../../shared/components/ui/form-controls/input-component/input-component';
import { SelectComponent } from '../../../../../../../shared/components/ui/form-controls/select-component/select-component';
import { MonitoringFacadeService } from '../../../../../services/monitoring-facade-service';
import { InformedFilterConfig } from '../../../../../../../model/ui/form-control';

@Component({
  selector: 'app-top-filters',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
  ],
  templateUrl: './top-filters.html',
  styleUrl: './top-filters.css',
})

export class TopFilters {

  @Input() filterConfig: InformedFilterConfig | null = null;


  topFilterForm: FormGroup = new FormGroup({
    nameId: new FormControl(null),
    status: new FormControl(null),
    responseId: new FormControl(null),
    priority: new FormControl(null)
  });

  private destroy$ = new Subject<void>();

  constructor(private facade: MonitoringFacadeService) { }

  ngOnInit() {
    this.setUpSubscriber();
  }

  setUpSubscriber() {
    this.facade.reset$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.onReset();
      });
  }

  get topFilters() {
    return {
      nameId: { key: 'nameId', label: 'Name/Id', placeholder: 'Search by name/id' },
      status: { key: 'status', label: 'Status', options: this.filterConfig?.status, defaultOptionLabel: 'ALL' },
      responseId: { key: 'responseId', label: 'Response Id', placeholder: 'Enter Value' },
      priority: { key: 'priority', label: 'Priority', options: this.filterConfig?.priority, defaultOptionLabel: 'ALL' }
    }
  }


  onSubmit() {
    this.facade.setTopFilters(this.topFilterForm.getRawValue());
    this.facade.setSearch();
  }

  onReset() {
    this.topFilterForm.reset();
    this.facade.setTopFilters(this.topFilterForm.value);
  }

  onResetClick() {
    this.facade.setReset();
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
