import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NotificationResponse, Notification } from '../../../model/notification';
import { NotificationsServices } from '../../../services/notificationsServices';
import { CustomDatePipe } from "../../../pipes/custom-date-pipe";
import { A11yModule } from "@angular/cdk/a11y";
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NotificationFacadeService } from '../../../services/notification-facade-service';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialog } from '../notification-dialog/notification-dialog';

@Component({
  selector: 'app-notifications',
  imports: [CustomDatePipe, A11yModule, CommonModule, TruncatePipe],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() viewType: 'broadcast' | 'navbar' = 'broadcast';
  @Output() UnreadCount = new EventEmitter<number>();

  notifications: Notification[] = [];
  unreadCount: number = 0;

  constructor(
    private notificationsService: NotificationsServices,
    private facadeService: NotificationFacadeService,
    private dialog: MatDialog
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

  get filteredNotifications() {
    if (this.viewType === 'navbar') {
      return this.notifications.filter(n => !n.read);
    }
    return this.notifications;
  }

  sendUnreadCount() {
    this.UnreadCount.emit(this.unreadCount);
  }

  markAsRead(id: number) {
    this.notificationsService.setNotificationRead(id);
    this.sendUnreadCount();
  }

  openFullDetail(notification: Notification): void {

    this.dialog.open(NotificationDialog, {
      width: '400px',
      height: '300px',
      data: notification
    });

    // this.selectedNotification = notification;
    // this.openDetailWindow = true;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
