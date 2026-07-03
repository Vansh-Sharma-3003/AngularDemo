import { Component, EventEmitter, Output } from '@angular/core';
import { MonitoringTabName } from '../../../../model/ui/monitoring-tab-name';
import { MatTabsModule } from "@angular/material/tabs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitoring-tabs',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './monitoring-tabs.html',
  styleUrl: './monitoring-tabs.css',
})
export class MonitoringTabs {

  @Output() tabChanged = new EventEmitter<string>();

  readonly tabs = [
    MonitoringTabName.RATERTRAINING,
    MonitoringTabName.RATERCALIBRATION,
    MonitoringTabName.BACKRATING,
    MonitoringTabName.BACKRATINGREVIEW
  ];
  activeTab: any = MonitoringTabName.RATERTRAINING;
}
