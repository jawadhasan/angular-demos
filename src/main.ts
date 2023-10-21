import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { onLCP, onFID, onCLS } from 'web-vitals';
import reportWebVitals from './reportWebVitals';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Log performance metrics to the console:
//reportWebVitals(console.log);
// onCLS(console.log);
// onFID(console.log);
// onLCP(console.log);
