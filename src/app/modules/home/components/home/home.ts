import { Component } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { Notifications } from "../../../../shared/components/notifications/notifications";

@Component({
  selector: 'app-home',
  imports: [MatDivider, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
