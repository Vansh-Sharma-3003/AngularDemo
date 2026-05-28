import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../model/dataType';

@Injectable({
  providedIn: 'root',
})
export class NotificationsApiServices {

  messageUrl = 'http://localhost:5000/messages';
  badgeCount = 'http://localhost:5000/unreadCount';

  constructor(private http: HttpClient) {
  }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.messageUrl);
  }

  getUnreadCount() : Observable<number> {
    return this.http.get<number>(this.badgeCount);
  }
}