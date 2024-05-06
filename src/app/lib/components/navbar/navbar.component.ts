import { Component } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

const modules = [NzMenuModule, NzButtonModule, NzIconModule];

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [...modules],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    isCollapsed = false;

    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}
