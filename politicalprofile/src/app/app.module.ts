import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { AboutComponent } from './home/about/about.component';
import { GoalsComponent } from './home/goals/goals.component';
import { EventsComponent } from './home/events/events.component';
import { NewsComponent } from './home/news/news.component';
import { ContactComponent } from './home/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventjumboComponent } from './home/events/eventjumbo/eventjumbo.component';
import { GoalsjumboComponent } from './home/goals/goalsjumbo/goalsjumbo.component';
import { NewsjumboComponent } from './home/news/newsjumbo/newsjumbo.component';
import { ContactsjumboComponent } from './home/contact/contactsjumbo/contactsjumbo.component';
///////////////////////////

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ng--bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// ngx-bootsrtap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EventpageComponent } from './eventpage/eventpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { FooterComponent } from './footer/footer.component';
import { NewsBannerComponent } from './newspage/news-banner/news-banner.component';
import { SNewspageComponent } from './newspage/s-newspage/s-newspage.component';
import { EventpageBannerComponent } from './eventpage/eventpage-banner/eventpage-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBannerComponent,
    AboutComponent,
    GoalsComponent,
    EventsComponent,
    NewsComponent,
    ContactComponent,
    NavbarComponent,

    ContactsjumboComponent,
    NewsjumboComponent,
    GoalsjumboComponent,
    EventjumboComponent,
    EventpageComponent,
    NewspageComponent,
    FooterComponent,
    NewsBannerComponent,
    SNewspageComponent,
    EventpageBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,

    // ngx-modules-imports
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
