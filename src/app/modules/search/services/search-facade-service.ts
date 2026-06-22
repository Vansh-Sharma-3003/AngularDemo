import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterConfig } from '../../../model/ui/form-control';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {

  private filterConfig = new BehaviorSubject<FilterConfig | null>(null);
  filterConfig$ : Observable<FilterConfig | null> = this.filterConfig.asObservable();

  setFilterConfig(filterConfig : FilterConfig){
    this.filterConfig.next(filterConfig);
  }
}
