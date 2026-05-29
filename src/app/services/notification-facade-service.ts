import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationResponse } from '../model/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationFacadeService {
  private notificationResponse = new BehaviorSubject<NotificationResponse>({
    unreadCount: 0,
    notifications: []
  });
  notificationsResponse$: Observable<NotificationResponse> = this.notificationResponse.asObservable();

  setNotificationResponse(notificationResponse: NotificationResponse) {
    this.notificationResponse.next(notificationResponse);
  }

}
