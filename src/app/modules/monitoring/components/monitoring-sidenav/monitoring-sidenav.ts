import { Component } from '@angular/core';
import { MonitoringTabName } from '../../../../model/ui/monitoring-tab-name';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monitoring-sidenav',
  imports: [RouterLink],
  templateUrl: './monitoring-sidenav.html',
  styleUrl: './monitoring-sidenav.css',
})
export class MonitoringSidenav {
  readonly tabNames = [
      MonitoringTabName.RATERTRAINING,
      MonitoringTabName.RATERCALIBRATION,
      MonitoringTabName.BACKRATING,
      MonitoringTabName.BACKRATINGREVIEW
  ];
}
