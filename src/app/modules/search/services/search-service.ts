import { Injectable } from '@angular/core';
import { SearchFacadeService } from './search-facade-service';
import { SearchApiService } from './search-api-service';
import { FilterConfig } from '../../../model/ui/form-control';
import { MOCK_TABLE_DATA } from '../../../model/ui/table-data';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(
    private searchFacade: SearchFacadeService, 
    private searchAPI: SearchApiService
  ){}

  loadFilterConfig(){
    this.searchAPI.getFiltersConfig().subscribe({
      next: (filterConfig: FilterConfig) => {
        this.searchFacade.setFilterConfig(filterConfig);
      },

      error: (error)=> {
        console.error('Error loading Filter Configrations:', error);
      }
    });
  }

  loadFilterData(){
    this.searchAPI.getFilterData().subscribe({
      next: (filterData: MOCK_TABLE_DATA[]) => {
        this.searchFacade.setFilterData(filterData);
      },

      error: (error)=> {
        console.error('Error loading Filter Data:', error);
      }
    });
  }
}
