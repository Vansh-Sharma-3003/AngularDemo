import { Component } from '@angular/core';
import { MonitoringTabName, MonitoringTabsNames } from '../../../../model/ui/monitoring-tab-name';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monitoring-sidenav',
  imports: [RouterLink],
  templateUrl: './monitoring-sidenav.html',
  styleUrl: './monitoring-sidenav.css',
})
export class MonitoringSidenav {
  readonly tabNames = [
  {
    label: MonitoringTabName.RATERTRAINING,
    value: MonitoringTabsNames.RATERTRAINING,
  },
  {
    label: MonitoringTabName.RATERCALIBRATION,
    value: MonitoringTabsNames.RATERCALIBRATION,
  },
  {
    label: MonitoringTabName.BACKRATING,
    value: MonitoringTabsNames.BACKRATING,
  },
  {
    label: MonitoringTabName.BACKRATINGREVIEW,
    value: MonitoringTabsNames.BACKRATINGREVIEW,
  },
];
}
