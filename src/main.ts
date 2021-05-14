import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// var myIndex = 0;
//carousel();

// function carousel() {
  // var i;
  // var x = document.getElementsByClassName("mySlides");
  // for (i = 0; i < x.length; i++) {
    // x[i].style.display = "none";  
  // }
  // myIndex++;
  // if (myIndex > x.length) {myIndex = 1}    
  // x[myIndex-1].style.display = "block";  
  // setTimeout(carousel, 4000);    
// }

// Used to toggle the menu on small screens when clicking on the menu button
