import { Injectable } from '@angular/core';
import { NotificationsApiServices } from './notificationsApiServices';
import { NotificationFacadeService } from './notification-facade-service';
import { NotificationResponse } from '../model/notification';


@Injectable({
  providedIn: 'root',
})
export class NotificationsServices {

  constructor(
    private notificationsApiServices: NotificationsApiServices, 
    private facade: NotificationFacadeService
  ) { }


  loadNotifications() {
    this.notificationsApiServices.getNotifications().subscribe({
      next: (notificationResponse: NotificationResponse) => {
        this.facade.setNotificationResponse(notificationResponse);
      },
      error: (error) => {
        console.error('Error loading notifications:', error);
      }
    });
  }
}
