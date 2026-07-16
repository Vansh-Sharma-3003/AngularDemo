import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InformedFilterConfig } from '../../../model/ui/form-control';
import { PageEvent } from '@angular/material/paginator';
import { INFORMED_TABLE_DATA, InformedSearchFilters } from '../../../model/ui/table-data';

@Injectable({
  providedIn: 'root',
})
export class MonitoringFacadeService {

  private informedFilterConfig = new BehaviorSubject<InformedFilterConfig | null>(null);
  informedFilterConfig$: Observable<InformedFilterConfig | null> = this.informedFilterConfig.asObservable();

  private tableData = new BehaviorSubject<INFORMED_TABLE_DATA[] | null>(null);
  tableData$: Observable<INFORMED_TABLE_DATA[] | null> = this.tableData.asObservable();

  private filtersSubject = new BehaviorSubject<InformedSearchFilters>({});
  filters$ = this.filtersSubject.asObservable();

  private originalDataSubject = new BehaviorSubject<INFORMED_TABLE_DATA[]>([]);

  private filteredDataSubject = new BehaviorSubject<INFORMED_TABLE_DATA[]>([]);
  filteredData$ = this.filteredDataSubject.asObservable();

  private _reset = new BehaviorSubject<void>(undefined);
  reset$ = this._reset.asObservable();

  private _search = new BehaviorSubject<void>(undefined);
  search$ = this._search.asObservable();

  private topFilters = new BehaviorSubject<InformedSearchFilters>({});
  topFilters$ = this.topFilters.asObservable;

  private moreFilters = new BehaviorSubject<InformedSearchFilters>({});
  moreFilters$ = this.moreFilters.asObservable;

  private pageStateSubject = new BehaviorSubject<PageEvent>({
    pageIndex: 0,
    pageSize: 10,
    length: 0
  });

  pageState$ = this.pageStateSubject.asObservable();

  setPageState(page: PageEvent) {
    this.pageStateSubject.next(page);
  }

  getPageState(): PageEvent {
  return this.pageStateSubject.value;
}

  resetPage() {
    const current = this.pageStateSubject.value;

    this.pageStateSubject.next({
      ...current,
      pageIndex: 0
    });
  }

  setFilterConfig(filterConfig: InformedFilterConfig) {
    this.informedFilterConfig.next(filterConfig);
  }

  setTableData(filterData: INFORMED_TABLE_DATA[]) {
    this.tableData.next(filterData);
  }

  setTopFilters(topFilters: InformedSearchFilters) {
    this.topFilters.next(topFilters);
  }

  setMoreFilters(moreFilters: InformedSearchFilters) {
    this.moreFilters.next(moreFilters);
  }

  setReset() {
    this._reset.next();
  }

  setSearch() {
    this._search.next();
  }

  setData(data: INFORMED_TABLE_DATA[]) {
    this.originalDataSubject.next(data);
    this.applyFilters();
  }

  getTopFilters(): InformedSearchFilters {
    return this.topFilters.value;
  }

  getMoreFilters(): InformedSearchFilters {
    return this.moreFilters.value;
  }

  updateFilters(filters: InformedSearchFilters) {
    this.filtersSubject.next(filters);
    this.applyFilters();
  }

  private applyFilters() {

    const data = this.originalDataSubject.value;
    const filters = this.filtersSubject.value;

    const filtered = data.filter(item =>
      this.matchesFilters(item, filters)
    );

    this.filteredDataSubject.next(filtered);
  }

  private matchesFilters(
    item: INFORMED_TABLE_DATA,
    f: InformedSearchFilters
  ): boolean {
    return (
      (!f.status || item.status === f.status) &&
      (!f.priority || item.priority === f.priority) &&
      (!f.responseId || item.responseId.includes(f.responseId)) &&
      (!f.nameId ||
        item.nameId?.toLowerCase().includes(f.nameId.toLowerCase()) ||
        item.candidateId?.toLowerCase().includes(f.nameId.toLowerCase())) &&
      (!f.leader || item.leader === f.leader) &&
      (!f.feedback || item.feedback === f.feedback) &&
      (!f.responseType ||
        item.responseType?.toLowerCase().includes(f.responseType.toLowerCase()))
    );
  }
}
