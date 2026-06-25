import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';
import { MOCK_TABLE_DATA } from '../../../model/ui/table-data';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {

  private filterConfig = new BehaviorSubject<FilterConfig | null>(null);
  filterConfig$: Observable<FilterConfig | null> = this.filterConfig.asObservable();

  private tableData = new BehaviorSubject<MOCK_TABLE_DATA[] | null>(null);
  tableData$: Observable<MOCK_TABLE_DATA[] | null> = this.tableData.asObservable();

  private filtersSubject = new BehaviorSubject<any>({});
  filters$ = this.filtersSubject.asObservable();

  private originalDataSubject = new BehaviorSubject<any[]>([]);

  private filteredDataSubject = new BehaviorSubject<any[]>([]);
  filteredData$ = this.filteredDataSubject.asObservable();

  setFilterConfig(filterConfig: FilterConfig) {
    this.filterConfig.next(filterConfig);
  }

  setTableData(filterData: MOCK_TABLE_DATA[]) {
    this.tableData.next(filterData);
  }

  setData(data: any[]) {
    this.originalDataSubject.next(data);
    this.filteredDataSubject.next(data); 
    this.applyFilters();
  }

  updateFilters(filters: any) {
    console.log('updateFilters called', filters);

    const current = this.filtersSubject.value;

    this.filtersSubject.next({
      ...current,
      ...filters
    });

    this.applyFilters();
  }

  private applyFilters() {
    console.log('applyFilters running');
    const data = this.originalDataSubject.value;
    const f = this.filtersSubject.value;

    console.log('Data:', data.length);
    console.log('Filters:', f);

    const filtered = data.filter(item => {

      console.log(
        'Comparing:',
        item.searchType,
        'with',
        f.searchType
      );

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
    });

    console.log('Filtered:', filtered);

    this.filteredDataSubject.next(filtered);
  }
}
