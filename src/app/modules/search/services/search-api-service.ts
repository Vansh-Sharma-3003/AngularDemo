import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';
import { SEARCH_FIELDS_MOCK_DATA } from './search-mock-data';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {

  getFiltersConfig(): Observable<FilterConfig>{
    return of(SEARCH_FIELDS_MOCK_DATA);
  }
}
