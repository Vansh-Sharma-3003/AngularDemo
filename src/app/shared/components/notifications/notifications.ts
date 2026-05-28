import { Component, OnInit } from '@angular/core';
import { NotificationsApiServices } from '../../../services/notificationsApiServices';
import { Notification } from '../../../model/dataType';
import { NotificationsServices } from '../../../services/notificationsServices';
import { CustomDatePipe } from "../../../pipes/custom-date-pipe";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-notifications',
  imports: [CustomDatePipe, A11yModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit {

  notifications: Notification[] = [
  ];

  badgeCount: number = 3;

  constructor(private notificationsService: NotificationsServices, private notificationsApiService: NotificationsApiServices) { }

  ngOnInit(): void {
    this.notificationsService.notifications =
      this.notificationsApiService.getNotifications();
    this.notificationsService.notifications.subscribe({
      next: (notifications: Notification[]) => {
        this.notifications = notifications;
        console.log('Notifications loaded:', this.notifications);
      },
      error: (error) => {
        console.error('Error loading notifications:', error);
      }
    });

   this.notificationsService.badgeCount =
      this.notificationsApiService.getUnreadCount();
    this.notificationsService.badgeCount.subscribe({
      next: (count: number) => {
        this.badgeCount = count;
        console.log('Badge count loaded:', this.badgeCount);
      },
      error: (error) => {
        console.error('Error loading badge count:', error);
      }
    });
  }

}
