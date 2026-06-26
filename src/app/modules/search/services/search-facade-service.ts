import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';
import { MOCK_TABLE_DATA, SearchFilters } from '../../../model/ui/table-data';

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

  setFilterConfig(filterConfig: FilterConfig) {
    this.filterConfig.next(filterConfig);
  }

  setTableData(filterData: MOCK_TABLE_DATA[]) {
    this.tableData.next(filterData);
  }

  setData(data: MOCK_TABLE_DATA[]) {
    this.originalDataSubject.next(data);
    this.applyFilters();
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

