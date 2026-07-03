import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, RouterLink, MatIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

@ViewChild('monitoringDrawer')
  monitoringDrawer!: MatDrawer;

  onToggle() {
    this.monitoringDrawer.toggle();
  }

  @HostListener('document:click')
  onDocumentClick() {
    if (this.monitoringDrawer.opened) {
      this.monitoringDrawer.close();
    }
  }

}
