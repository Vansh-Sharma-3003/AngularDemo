import { Component } from '@angular/core';
import { ResponseViewerTab } from "./response-viewer-tab/response-viewer-tab";
import { ResponseViewerFooter } from "./response-viewer-footer/response-viewer-footer";
import { ResponseViewerContent } from "./response-viewer-content/response-viewer-content";

@Component({
  selector: 'app-response-viewer',
  imports: [ResponseViewerTab, ResponseViewerFooter, ResponseViewerContent],
  templateUrl: './response-viewer.html',
  styleUrl: './response-viewer.css',
})
export class ResponseViewer {
  activeTab: string | null = null;

  onTabChanged(tabName: string) {
    this.activeTab = tabName;
  }
}
