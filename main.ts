import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; // this allows to compile in browser

import { AppModule } from "./app/app.module"; // import app module

platformBrowserDynamic().bootstrapModule(AppModule); // this bootstrap module in application
