import { Component, OnInit, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Notifications } from "../notifications/notifications";
import { NotificationsApiServices } from '../../../services/notificationsApiServices';
import { NotificationsServices } from '../../../services/notificationsServices';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatButtonModule, Notifications],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  
  @Input() badgeCount: number = 0;

}
