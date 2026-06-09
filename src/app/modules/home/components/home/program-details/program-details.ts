import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProgramDetail } from '../../../../../model/programDetails';
import { CustomDatePipe } from "../../../../../pipes/custom-date-pipe";
import { HomeService } from '../../../services/home-service';
import { HomeFacade } from '../../../services/home-facade';

@Component({
  selector: 'app-program-details',
  imports: [CustomDatePipe],
  templateUrl: './program-details.html',
  styleUrl: './program-details.css',
})
export class ProgramDetails {

    programDetails: ProgramDetail | null = null;
    private destroy$ = new Subject<void>();
  
  
    constructor(private homeService: HomeService,
        private facadeService: HomeFacade) { }
  
    ngOnInit() {
      this.setUpSubscriber();
      this.homeService.loadProgramDetails();
    }
  
    setUpSubscriber() {
      this.facadeService.programDetails$
        .pipe(takeUntil(this.destroy$))
        .subscribe({
        next: (programDetails) => {
          this.programDetails = programDetails;
        },
        error: (error) => {
          console.error('Error receiving program details:', error);
        }
      });
    }
  
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
}
