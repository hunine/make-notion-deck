import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';

const components = [LayoutHorizontalComponent];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ...components],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'make-notion-deck';
}
