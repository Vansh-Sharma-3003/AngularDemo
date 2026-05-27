import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationMessages {

  messageUrl = 'http://localhost:5000/messages';
  badgeCount = 'http://localhost:5000/unreadCount';

  constructor(private http: HttpClient) {
  }

  getNotifications() : Observable<Notification[]> {
    return this.http.get<Notification[]>(this.messageUrl);
  }

  getUnreadCount() {
    return this.http.get(this.badgeCount);
  }
}