import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterLink, } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { MonitoringTabName } from '../../../model/ui/monitoring-tab-name';
import { MonitoringSidenav } from "../../../modules/monitoring/components/monitoring-sidenav/monitoring-sidenav";

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, RouterLink, MatIcon, MonitoringSidenav],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  @ViewChild('monitoringDrawer')

  monitoringDrawer!: MatDrawer;

  readonly tabNames = [
      MonitoringTabName.RATERTRAINING,
      MonitoringTabName.RATERCALIBRATION,
      MonitoringTabName.BACKRATING,
      MonitoringTabName.BACKRATINGREVIEW
  ];

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
