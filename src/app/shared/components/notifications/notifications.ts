import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NotificationResponse, Notification } from '../../../model/notification';
import { NotificationsServices } from '../../../services/notificationsServices';
import { CustomDatePipe } from "../../../pipes/custom-date-pipe";
import { A11yModule } from "@angular/cdk/a11y";
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NotificationFacadeService } from '../../../services/notification-facade-service';

@Component({
  selector: 'app-notifications',
  imports: [CustomDatePipe, A11yModule, CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() viewType: 'broadcast' | 'navbar' = 'broadcast';


  @Output() UnreadCount = new EventEmitter<number>();

  sendUnreadCount() {
    this.UnreadCount.emit(this.unreadCount);
  }

  notifications: Notification[] = [];
  unreadCount: number = 0;

  constructor(
    private notificationsService: NotificationsServices, 
    private facadeService: NotificationFacadeService
  ) { }

  ngOnInit(): void {
    this.setupSubscriber();
    this.notificationsService.loadNotifications();
    this.sendUnreadCount();
  }

  setupSubscriber() {
    this.facadeService.notificationsResponse$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (notificationsResponse: NotificationResponse) => {
          this.notifications = notificationsResponse?.notifications;
          this.unreadCount = notificationsResponse?.unreadCount || 0;
        },
        error: (error) => {
          console.error('Error receiving notifications response:', error);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }  

}
