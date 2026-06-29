import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/ui/form-controls/input-component/input-component';
import { SelectComponent } from '../../../../shared/components/ui/form-controls/select-component/select-component';
import { CommonModule } from '@angular/common';
import { FilterConfig } from '../../../../model/ui/form-control';
import { SearchFacadeService } from '../../services/search-facade-service';
import { Subject, takeUntil } from 'rxjs';

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

  @Input() filterConfig: FilterConfig | null = null;


  topFilterForm: FormGroup = new FormGroup({
    searchType: new FormControl(null),
    nameId: new FormControl(null),
    searchResult: new FormControl(null),
    status: new FormControl(null),
    responseId: new FormControl(null),
  });

  private destroy$ = new Subject<void>();

  constructor(private facade: SearchFacadeService) { }

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
      searchType: { key: 'searchType', label: 'Search Type', options: this.filterConfig?.searchType, defaultOptionLabel: 'ALL' },
      nameId: { key: 'nameId', label: 'Name/Id', placeholder: 'Search by name/id' },
      status: { key: 'status', label: 'Status', options: this.filterConfig?.status, defaultOptionLabel: 'ALL' },
      searchResult: { key: 'searchResult', label: 'Search Result', options: this.filterConfig?.searchResult, defaultOptionLabel: 'ALL' },
      responseId: { key: 'responseId', label: 'Response Id', placeholder: 'Enter Value' }
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
