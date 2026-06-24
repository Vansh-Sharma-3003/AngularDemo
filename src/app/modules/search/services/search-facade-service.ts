import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';
import { MOCK_TABLE_DATA } from '../../../model/ui/table-data';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {

  private filterConfig = new BehaviorSubject<FilterConfig | null>(null);
  filterConfig$ : Observable<FilterConfig | null> = this.filterConfig.asObservable();

  private filterData =new BehaviorSubject<MOCK_TABLE_DATA[] | null>(null);
  filterData$ : Observable<MOCK_TABLE_DATA[] | null> = this.filterData.asObservable();

  setFilterConfig(filterConfig : FilterConfig){
    this.filterConfig.next(filterConfig);
  }

  setFilterData(filterData : MOCK_TABLE_DATA[]){
    this.filterData.next(filterData);
  }
}
