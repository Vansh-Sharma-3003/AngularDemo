import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ResponseViewerTabName } from '../../../../../model/ui/response-viewer-tab-name';

@Component({
  selector: 'app-response-viewer-tab',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './response-viewer-tab.html',
  styleUrl: './response-viewer-tab.css',
})
export class ResponseViewerTab {

  @Output() tabChanged = new EventEmitter<string>();

  readonly tabs = [
    ResponseViewerTabName.PROMPT,
    ResponseViewerTabName.SCORING_GUIDE,
    ResponseViewerTabName.SCORING_NOTES,
    ResponseViewerTabName.BENCHMARK,
    ResponseViewerTabName.RESPONSE
  ];
  activeTab: any = ResponseViewerTabName.RESPONSE;
}
