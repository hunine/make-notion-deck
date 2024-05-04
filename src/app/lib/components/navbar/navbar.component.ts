import { Component } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';

const modules = [NzMenuModule];

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [...modules],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
