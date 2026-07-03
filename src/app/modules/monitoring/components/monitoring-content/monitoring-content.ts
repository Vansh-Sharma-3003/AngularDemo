import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MonitoringTabName } from '../../../../model/ui/monitoring-tab-name';

@Component({
  selector: 'app-monitoring-content',
  imports: [CommonModule],
  templateUrl: './monitoring-content.html',
  styleUrl: './monitoring-content.css',
})
export class MonitoringContent {

    @Input() tabName: string | null = null;
    MonitoringTabName = MonitoringTabName;
}
