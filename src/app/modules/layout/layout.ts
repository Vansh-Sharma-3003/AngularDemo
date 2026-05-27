import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { Sidebar } from "../../shared/components/sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "../../shared/components/navbar/navbar";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, CommonModule, Sidebar, RouterOutlet, Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
