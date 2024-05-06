import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';

registerLocaleData(en);
const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideNzI18n(en_US),
        importProvidersFrom(FormsModule),
        importProvidersFrom(NzIconModule.forRoot(icons)),
        provideAnimationsAsync(),
        provideHttpClient(),
    ],
};
