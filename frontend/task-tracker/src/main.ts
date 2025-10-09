import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { Tasks } from './app/components/tasks/tasks';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { About } from './app/components/about/about';


const appRoutes: Routes = [
  { path: '', component: Tasks },
  { path: 'about', component: About },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes, withDebugTracing()),
    provideHttpClient()
  ]
});

