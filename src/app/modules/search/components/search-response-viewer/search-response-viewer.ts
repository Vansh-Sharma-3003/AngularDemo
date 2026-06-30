import { Component } from '@angular/core';
import { ResponseViewerHeader } from '../../../../shared/components/ui/response-viewer-header/response-viewer-header';
import { ResponseViewerContent } from '../../../../shared/components/ui/response-viewer-content/response-viewer-content';
import { ResponseViewerFooter } from '../../../../shared/components/ui/response-viewer-footer/response-viewer-footer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-response-viewer',
  imports: [ResponseViewerHeader, ResponseViewerContent, ResponseViewerFooter],
  templateUrl: './search-response-viewer.html',
  styleUrl: './search-response-viewer.css',
})
export class SearchResponseViewer {

  responseStatus:string | null='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.responseStatus = this.route.snapshot.paramMap.get('responseStatus');
  }
  
}
