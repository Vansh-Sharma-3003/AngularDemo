import { Component } from '@angular/core';
import { ResponseViewer } from "../../../../shared/components/ui/response-viewer/response-viewer";

@Component({
  selector: 'app-search-response-viewer',
  imports: [ ResponseViewer],
  templateUrl: './search-response-viewer.html',
  styleUrl: './search-response-viewer.css',
})
export class SearchResponseViewer {

  responseStatus: string | null = '';
  responseId: string | null = '';

  ngOnInit(): void {
    const state = history.state;
    console.log(state);

    this.responseId = state.responseId;
    this.responseStatus = state.responseStatus;

    console.log(this.responseStatus);
  }

}
