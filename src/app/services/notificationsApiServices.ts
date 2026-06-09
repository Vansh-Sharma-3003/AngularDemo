import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationResponse} from '../model/notification';
import { NOTIFICATION_MOCK_DATA} from './notification-mock-data';
@Injectable({
  providedIn: 'root',
})
export class NotificationsApiServices {
  getNotifications(): Observable<NotificationResponse> {
    return of(NOTIFICATION_MOCK_DATA);
  }

  setNotificationRead(notificationId: number): Observable<void> {
    const notification = NOTIFICATION_MOCK_DATA.notifications.find(
    notification => notification.id === notificationId
  );

  if (notification?.read === false) {
    notification.read = true;
    NOTIFICATION_MOCK_DATA.unreadCount = Math.max(0, NOTIFICATION_MOCK_DATA.unreadCount - 1);
    console.log(`Notification with ID ${notificationId} marked as read. Unread count: ${NOTIFICATION_MOCK_DATA.unreadCount}`);
  }

    return of(void 0);
  }
}