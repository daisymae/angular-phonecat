import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    // The arguments used here are the root element of the application (which is the same element we had ng-app on earlier), and the AngularJS 1.x modules that we want to load
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});
