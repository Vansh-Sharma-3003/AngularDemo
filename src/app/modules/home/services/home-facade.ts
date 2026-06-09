import { Injectable } from '@angular/core';
import { ProgramDetail } from '../../../model/programDetails';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodayTasksDetails } from '../../../model/today-tasks-model';

@Injectable({
  providedIn: 'root',
})
export class HomeFacade {

  private programDetails = new BehaviorSubject<ProgramDetail | null>(null);
  programDetails$: Observable<ProgramDetail | null> = this.programDetails.asObservable();

  private todayTaskDetails = new BehaviorSubject<TodayTasksDetails | null>(null);
  todayTaskDetails$: Observable<TodayTasksDetails| null> = this.todayTaskDetails.asObservable();

  setProgramDetails(programDetails: ProgramDetail) {
    this.programDetails.next(programDetails);
  }

  setTodayTaskDetails(todaytaskDetails: TodayTasksDetails) {
    this.todayTaskDetails.next(todaytaskDetails);
  }
}
