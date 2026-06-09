import { Injectable } from '@angular/core';
import { ProgramDetail } from '../../../model/programDetails';
import { Observable, of } from 'rxjs';
import { PROGRAM_MOCK_DATA } from './home-mock-data';
import { ACTIVITY_WORK_FLOW } from './home-mock-data';
import { TodayTasksDetails } from '../../../model/today-tasks-model';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService {

   getProgramDetails(): Observable<ProgramDetail> {
    return of(PROGRAM_MOCK_DATA);
  }

  getTodayTasks(): Observable<TodayTasksDetails>{
    return of(ACTIVITY_WORK_FLOW);
  }
}
