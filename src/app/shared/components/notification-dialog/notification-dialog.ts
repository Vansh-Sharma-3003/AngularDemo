import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { Notification } from '../../../model/notification';

@Component({
  selector: 'app-notification-dialog',
  imports: [MatDialogActions, MatDialogContent, MatDialogClose, MatButton],
  templateUrl: './notification-dialog.html',
  styleUrl: './notification-dialog.css',
})
export class NotificationDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public notification: Notification | null) { }
}
