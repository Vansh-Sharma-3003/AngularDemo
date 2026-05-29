import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationResponse } from '../model/notification';
import { NOTIFICATION_MOCK_DATA } from './notification-mock-data';

// const NOTIFICATION_MOCK_DATA: NotificationResponse = {
//   unreadCount: 3,
//   notifications: [
//     {
//       id: 1,
//       text: 'New message from John',
//       date: '2025-12-10',
//       read: false,
//       timestamp: Date.now()
//     },
//     {
//       id: 2,
//       text: 'System update available',
//       date: '2025-12-09',
//       read: true,
//       timestamp: Date.now()
//     },
//     {
//       id: 3,
//       text: 'Your report is ready',
//       date: '2025-12-08',
//       read: false,
//       timestamp: Date.now()
//     }
//   ]
// };

@Injectable({
  providedIn: 'root',
})
export class NotificationsApiServices {
  getNotifications(): Observable<NotificationResponse> {
    return of(NOTIFICATION_MOCK_DATA);
  }
}