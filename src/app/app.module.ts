import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { BandComponent } from './band/band.component';
import { TourComponent } from './tour/tour.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SlideShowComponent,
    BandComponent,
    TourComponent,
    ContactComponent,
    FooterComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SlideShowComponent },
      { path: 'band', component: BandComponent },
      { path: 'tour', component: TourComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'coming-soon', component: ComingSoonComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
