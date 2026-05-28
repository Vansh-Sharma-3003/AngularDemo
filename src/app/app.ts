import { Component, signal } from '@angular/core';
import { Layout } from "./modules/layout/layout";

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoproject');
}
