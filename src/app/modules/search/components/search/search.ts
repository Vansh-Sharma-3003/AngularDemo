import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { MoreFilters } from '../more-filters/more-filters';
import { TopFilters } from "../top-filters/top-filters";
import { Subject, takeUntil } from 'rxjs';
import { SearchFacadeService } from '../../services/search-facade-service';
import { SearchService } from '../../services/search-service';
import { FilterConfig } from '../../../../model/ui/form-control';
@Component({
  selector: 'app-search',
  imports: [ ReactiveFormsModule, MatMenuModule, MatSidenavContainer, MoreFilters, TopFilters],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  filterConfig: FilterConfig | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private facade: SearchFacadeService, 
    private searchService: SearchService
  ){}

  ngOnInit() {
    this.setUpSubscriber();
    this.searchService.loadFilterConfig();
  }

  setUpSubscriber(){
    this.facade.filterConfig$
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (filterConfig) =>{
        this.filterConfig = filterConfig;
      },

      error: (error) => {
          console.error('Error receiving Filter Config:', error);
      }
    });
  }

  onSubmit() {
    console.log('Search value:');
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
