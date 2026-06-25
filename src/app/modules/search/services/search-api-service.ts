import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';
import { SEARCH_FIELDS_MOCK_DATA, TABLE_DATA } from './search-mock-data';
import { MOCK_TABLE_DATA } from '../../../model/ui/table-data';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {

  getFiltersConfig(): Observable<FilterConfig>{
    return of(SEARCH_FIELDS_MOCK_DATA);
  }

  getTableData(): Observable<MOCK_TABLE_DATA[]>{
    return of (TABLE_DATA);
  }
}
