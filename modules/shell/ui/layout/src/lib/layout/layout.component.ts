import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from '@make-notion-deck/main-view';

const components = [MainViewComponent];

@Component({
  selector: 'lib-layout',
  standalone: true,
  imports: [...components, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
