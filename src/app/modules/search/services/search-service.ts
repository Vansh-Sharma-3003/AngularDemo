import { Injectable } from '@angular/core';
import { SearchFacadeService } from './search-facade-service';
import { SearchApiService } from './search-api-service';
import { FilterConfig } from '../../../model/ui/form-control';

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
      next: (filterConfig: FilterConfig)=>{
        this.searchFacade.setFilterConfig(filterConfig);
      },

      error: (error)=> {
        console.error('Error loading Filter Configrations:', error);
      }
    });
  }
}
