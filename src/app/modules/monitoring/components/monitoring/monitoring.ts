import { Component } from '@angular/core';
import { MonitoringTabs } from "../monitoring-tabs/monitoring-tabs";
import { MonitoringContent } from "../monitoring-content/monitoring-content";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  imports: [MonitoringTabs, MonitoringContent],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.css',
})
export class Monitoring {


  activeTab: string | null = null;

  tabName: string | null = null;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.tabName = params.get('tabName');
    });
    this.activeTab = this.tabName;
  }

  onTabChanged(tabName: string) {
    this.activeTab = tabName;
  }
}
