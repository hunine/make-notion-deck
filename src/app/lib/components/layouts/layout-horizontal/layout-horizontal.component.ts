import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

const modules = [NzLayoutModule];

const components = [NavbarComponent, FooterComponent];

@Component({
    selector: 'app-layout-horizontal',
    standalone: true,
    imports: [...components, ...modules],
    templateUrl: './layout-horizontal.component.html',
    styleUrl: './layout-horizontal.component.scss',
})
export class LayoutHorizontalComponent {}
