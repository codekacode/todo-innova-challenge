import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BoardDetailComponent } from './pages/board-detail/board-detail.component';
import { DetailBoardsComponent } from './pages/detail-boards/detail-boards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardDetailComponent,
    DetailBoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
