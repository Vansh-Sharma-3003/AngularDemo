import { Injectable } from '@angular/core';
import { Notification } from '../model/dataType';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NotificationsServices {

  notifications:Observable<Notification[]> = new Observable();

  badgeCount: Observable<number> = new Observable();
}
