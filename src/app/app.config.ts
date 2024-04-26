import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { webShellRoutes } from '@make-notion-deck/web-shell';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(webShellRoutes)],
};
