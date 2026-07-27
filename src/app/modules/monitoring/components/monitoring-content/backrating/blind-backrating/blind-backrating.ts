import { Component } from '@angular/core';
import { TopFilters } from './top-filters/top-filters';
import { MoreFilters } from './more-filters/more-filters';
import { MatSidenavContainer } from "@angular/material/sidenav";

@Component({
  selector: 'app-blind-backrating',
  imports: [TopFilters, MoreFilters, MatSidenavContainer],
  templateUrl: './blind-backrating.html',
  styleUrl: './blind-backrating.css',
})
export class BlindBackrating {
filterConfig:any;
}
