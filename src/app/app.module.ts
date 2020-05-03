import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelemetryComponent } from './page/telemetry/telemetry.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { HttpMessageListComponent } from './ui/http-message-list/http-message-list.component';

@NgModule({
  declarations: [AppComponent, TelemetryComponent, HttpMessageListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
