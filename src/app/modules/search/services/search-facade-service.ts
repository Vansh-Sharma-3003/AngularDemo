import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';
import { MOCK_TABLE_DATA, SearchFilters } from '../../../model/ui/table-data';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {

  private filterConfig = new BehaviorSubject<FilterConfig | null>(null);
  filterConfig$: Observable<FilterConfig | null> = this.filterConfig.asObservable();

  private tableData = new BehaviorSubject<MOCK_TABLE_DATA[] | null>(null);
  tableData$: Observable<MOCK_TABLE_DATA[] | null> = this.tableData.asObservable();

  private filtersSubject = new BehaviorSubject<SearchFilters>({});
  filters$ = this.filtersSubject.asObservable();

  private originalDataSubject = new BehaviorSubject<MOCK_TABLE_DATA[]>([]);

  private filteredDataSubject = new BehaviorSubject<MOCK_TABLE_DATA[]>([]);
  filteredData$ = this.filteredDataSubject.asObservable();

  private _reset = new BehaviorSubject<void>(undefined);
  reset$ = this._reset.asObservable();

  private _search = new BehaviorSubject<void>(undefined);
  search$ = this._search.asObservable();

  private topFilters = new BehaviorSubject<SearchFilters>({});
  topFilters$ = this.topFilters.asObservable;

  private moreFilters = new BehaviorSubject<SearchFilters>({});
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

  setFilterConfig(filterConfig: FilterConfig) {
    this.filterConfig.next(filterConfig);
  }

  setTableData(filterData: MOCK_TABLE_DATA[]) {
    this.tableData.next(filterData);
  }

  setTopFilters(topFilters: SearchFilters) {
    this.topFilters.next(topFilters);
  }

  setMoreFilters(moreFilters: SearchFilters) {
    this.moreFilters.next(moreFilters);
  }

  setReset() {
    this._reset.next();
  }

  setSearch() {
    this._search.next();
  }

  setData(data: MOCK_TABLE_DATA[]) {
    this.originalDataSubject.next(data);
    this.applyFilters();
  }

  getTopFilters(): SearchFilters {
    return this.topFilters.value;
  }

  getMoreFilters(): SearchFilters {
    return this.moreFilters.value;
  }

  updateFilters(filters: SearchFilters) {
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
    item: MOCK_TABLE_DATA,
    f: SearchFilters
  ): boolean {
    return (
      (!f.searchType || item.searchType === f.searchType) &&
      (!f.status || item.status === f.status) &&
      (!f.searchResult || item.searchResult === f.searchResult) &&
      (!f.responseId || item.responseId.includes(f.responseId)) &&
      (!f.nameId ||
        item.name?.toLowerCase().includes(f.nameId.toLowerCase()) ||
        item.candidateId?.toLowerCase().includes(f.nameId.toLowerCase())) &&
      (!f.leader || item.leader === f.leader) &&
      (!f.teamLeader || item.teamLeader === f.teamLeader) &&
      (!f.queueTpye || item.queueType === f.queueTpye) &&
      (!f.feedback || item.feedback === f.feedback) &&
      (!f.responseType ||
        item.responseType?.toLowerCase().includes(f.responseType.toLowerCase()))
    );
  }
}
