import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InformedFilterConfig } from '../../../model/ui/form-control';
import { INFORMED_FILTER_CONFIG_DATA, TABLE_DATA } from './informed-mock-data';
import { INFORMED_TABLE_DATA } from '../../../model/ui/table-data';

@Injectable({
  providedIn: 'root',
})
export class MonitoringApiService {

  getFiltersConfig(): Observable<InformedFilterConfig>{
    return of(INFORMED_FILTER_CONFIG_DATA);
  }

  getTableData(): Observable<INFORMED_TABLE_DATA[]>{
    return of (TABLE_DATA);
  }
}
