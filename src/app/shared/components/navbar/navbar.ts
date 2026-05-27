import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotificationMessages } from '../../../services/notification-messages';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  notifications: Notification[] = [
  ];

  constructor(private notificationService: NotificationMessages) {}

  ngOnInit() : void {
    // Fetch notifications from the server and update the notifications array
    this.getNotifications();
  }

  getNotifications() {
    this.notificationService.getNotifications().subscribe((data: Notification[]) => {
      this.notifications = data;
      console.log('Notifications fetched:', this.notifications);
    })
  }
}
