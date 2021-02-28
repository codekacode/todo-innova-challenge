import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TrelloService } from './services/trello.service';
import { DetailBoardsComponent } from './pages/detail-boards/detail-boards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxModalModule } from 'ngx-easy-modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailBoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
