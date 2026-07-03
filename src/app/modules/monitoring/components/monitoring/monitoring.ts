import { Component } from '@angular/core';
import { MonitoringTabs } from "../monitoring-tabs/monitoring-tabs";
import { MonitoringContent } from "../monitoring-content/monitoring-content";

@Component({
  selector: 'app-monitoring',
  imports: [MonitoringTabs, MonitoringContent],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.css',
})
export class Monitoring {
  
  
  activeTab: string | null = null;

  onTabChanged(tabName: string) {
    this.activeTab = tabName;
  }
}
