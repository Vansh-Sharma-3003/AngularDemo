import { Component } from '@angular/core';
import { MonitoringTabs } from "../monitoring-tabs/monitoring-tabs";
import { MonitoringContent } from "../monitoring-content/monitoring-content";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  imports: [MonitoringTabs, MonitoringContent],
  templateUrl: './monitoring.html',
  styleUrl: './monitoring.css',
})
export class Monitoring {


  activeTab: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.activeTab = params.get('tabName');
    });
}

  onTabChanged(tabName: string) {
    this.activeTab = tabName;
    this.updateQueryParams();
  }

  updateQueryParams() {
    this.router.navigate(['/monitoring'], {
      queryParams: {
        tabName: this.activeTab
      },
      queryParamsHandling: 'merge'
    });
  }
}
