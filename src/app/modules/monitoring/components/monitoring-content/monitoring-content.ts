import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MonitoringTabName, MonitoringTabsNames } from '../../../../model/ui/monitoring-tab-name';
import { RaterTraining } from "./rater-training/rater-training";
import { RaterCalibration } from "./rater-calibration/rater-calibration";
import { BackratingReview } from "./backrating-review/backrating-review";
import { Backrating } from "./backrating/backrating";

@Component({
  selector: 'app-monitoring-content',
  imports: [CommonModule, RaterTraining, RaterCalibration, BackratingReview, Backrating],
  templateUrl: './monitoring-content.html',
  styleUrl: './monitoring-content.css',
})
export class MonitoringContent {

    @Input() tabName: string | null = null;
    
    MonitoringTabsNames = MonitoringTabsNames;
}
