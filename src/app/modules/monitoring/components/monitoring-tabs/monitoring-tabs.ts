import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
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

@Input() currentTab: string | null = null;

  @Output() tabChanged = new EventEmitter<string>();

  readonly tabs = [
    MonitoringTabName.RATERTRAINING,
    MonitoringTabName.RATERCALIBRATION,
    MonitoringTabName.BACKRATING,
    MonitoringTabName.BACKRATINGREVIEW
  ];

  activeTab: string | null = null;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentTab']) {
      this.activeTab = this.currentTab;
    }
}
  onTabChange(tabName: string) {
    this.activeTab = tabName;
    this.tabChanged.emit(tabName);
  }
}
