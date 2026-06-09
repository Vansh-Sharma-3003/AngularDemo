import { Injectable } from '@angular/core';
import { HomeApiService } from './home-api-service';
import { HomeFacade } from './home-facade';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private programApiService : HomeApiService, private facade : HomeFacade){}

   loadProgramDetails() {
    this.programApiService.getProgramDetails().subscribe({
      next: (programDetails) => {
        this.facade.setProgramDetails(programDetails);
      },
      error: (error) => {
        console.error('Error loading program details:', error);
      }
    });
  }

  loadTodayTasksDetails() {
    this.programApiService.getTodayTasks().subscribe({
      next: (todayTaskDetails) => {
        this.facade.setTodayTaskDetails(todayTaskDetails);
      },
      error: (error) => {
        console.error('Error loading program details:', error);
      }
    });
  }
}
