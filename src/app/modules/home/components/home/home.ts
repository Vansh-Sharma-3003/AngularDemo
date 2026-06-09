import { Component } from '@angular/core';
import { Notifications } from "../../../../shared/components/notifications/notifications";
import { CommonModule } from '@angular/common';
import { ProgramDetails } from "./program-details/program-details";
import { TodayTasks } from "./today-tasks/today-tasks";

@Component({
  selector: 'app-home',
  imports: [Notifications, CommonModule, ProgramDetails, TodayTasks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  imageUrl: string = '/assets/portrait-young-employee-team_74855-7822.avif';

  

  ngOnInit() {
    this.imageUrl = '/assets/portrait-young-employee-team_74855-7822.avif';
  }

  
}  


