import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-response-viewer-header',
  imports: [MatTabsModule,CommonModule],
  templateUrl: './response-viewer-header.html',
  styleUrl: './response-viewer-header.css',
})
export class ResponseViewerHeader {

  @Input() status : string | null ='';
  links = ['PROMPT', 'SCORING GUIDE', 'SCORING NOTES', 'BENCHMARK', 'RESPONSE'];
  activeLink = this.links[0];
}
