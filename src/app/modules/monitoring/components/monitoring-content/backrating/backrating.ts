import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InformedBackrating } from './informed-backrating/informed-backrating';
import { BlindBackrating } from './blind-backrating/blind-backrating';

@Component({
  selector: 'app-backrating',
  imports: [CommonModule, InformedBackrating, BlindBackrating],
  templateUrl: './backrating.html',
  styleUrl: './backrating.css',
})
export class Backrating {

  activeTab = '';
  openTab(tab: string) {
    this.activeTab = tab;
  }
}
