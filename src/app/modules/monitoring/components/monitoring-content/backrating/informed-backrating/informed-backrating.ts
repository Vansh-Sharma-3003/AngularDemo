import { Component } from '@angular/core';
import { MatSidenavContainer } from "@angular/material/sidenav";
import { FilterConfig } from '../../../../../../model/ui/form-control';
import { TopFilters } from '../../../../../search/components/top-filters/top-filters';
import { MoreFilters } from '../../../../../search/components/more-filters/more-filters';

@Component({
  selector: 'app-informed-backrating',
  imports: [MatSidenavContainer, TopFilters, MoreFilters],
  templateUrl: './informed-backrating.html',
  styleUrl: './informed-backrating.css',
})
export class InformedBackrating {

  filterConfig: FilterConfig | null = null;
}
