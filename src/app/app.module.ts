import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './components/home/home.component';
import { PrizeComponent } from './components/prize/prize.component';
import { AlfrednobelComponent } from './components/alfrednobel/alfrednobel.component';
import { EventComponent } from './components/event/event.component';
import { NewsComponent } from './components/news/news.component';





@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    PrizeComponent,
    AlfrednobelComponent,
    EventComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
