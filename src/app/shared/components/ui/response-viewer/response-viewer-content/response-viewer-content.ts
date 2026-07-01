import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResponseViewerResponse } from "./response-viewer-response/response-viewer-response";
import { ResponseViewerPrompt } from "./response-viewer-prompt/response-viewer-prompt";
import { ResponseViewerTabName } from '../../../../../model/ui/response-viewer-tab-name';
import { ResponseViewerScoringGuide } from "./response-viewer-scoring-guide/response-viewer-scoring-guide";
import { ResponseViewerScoringNotes } from "./response-viewer-scoring-notes/response-viewer-scoring-notes";
import { ResponseViewerBenchmark } from "./response-viewer-benchmark/response-viewer-benchmark";
import { ResponseViewerRaterScorePanel } from './response-viewer-rater-score-panel/response-viewer-rater-score-panel';
import { RaterScorePanelType } from '../../../../../model/ui/rater-score-panel';

@Component({
  selector: 'app-response-viewer-content',
  imports: [
    CommonModule,
    ResponseViewerResponse,
    ResponseViewerPrompt,
    ResponseViewerScoringGuide,
    ResponseViewerScoringNotes,
    ResponseViewerBenchmark,
    ResponseViewerRaterScorePanel,
],
  templateUrl: './response-viewer-content.html',
  styleUrl: './response-viewer-content.css',
})
export class ResponseViewerContent {

  @Input() tabName: string | null = null;

  raterScorePanelVisible: boolean = true;

  ResponseViewerTabName = ResponseViewerTabName;
  RaterScorePanelType = RaterScorePanelType;

}
