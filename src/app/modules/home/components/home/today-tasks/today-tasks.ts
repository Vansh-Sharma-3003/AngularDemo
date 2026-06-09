import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from '../../../services/home-service';
import { HomeFacade } from '../../../services/home-facade';
import { TodayTasksDetails } from '../../../../../model/today-tasks-model';
import { MatIcon } from "@angular/material/icon";
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-today-tasks',
  imports: [CommonModule, MatIcon, MatExpansionModule],
  templateUrl: './today-tasks.html',
  styleUrl: './today-tasks.css',
})
export class TodayTasks {

  isOpen = false;

  icon_color = "red";

  todayTaskDetails: TodayTasksDetails | null = null;
  private destroy$ = new Subject<void>();


  constructor(private homeService: HomeService,
    private facadeService: HomeFacade) { }

  ngOnInit() {
    this.setUpSubscriber();
    this.homeService.loadTodayTasksDetails();
  }

  setUpSubscriber() {
    this.facadeService.todayTaskDetails$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (todayTaskDetails) => {
          this.todayTaskDetails= todayTaskDetails;
        },
        error: (error) => {
          console.error('Error receiving program details:', error);
        }
      });
  }


  toggleDiv() {
    this.isOpen = !this.isOpen;
  }

  iconColor(stage: string | undefined) : string{
    if(stage === "INPG"){
      return "orange";
    }
    else if(stage === "CPD"){
      return "green";
    }
    else{
      return "gray";
    }
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }



}
