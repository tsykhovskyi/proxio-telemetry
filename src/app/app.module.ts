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
import { HttpMessageComponent } from './ui/http-message/http-message.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeadersComponent } from './ui/http-message/headers/headers.component';
import { PrettierComponent } from './ui/http-message/prettier/prettier.component';
import { HtmlComponent } from './ui/http-message/prettier/html/html.component';
import { ImageComponent } from './ui/http-message/prettier/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    TelemetryComponent,
    HttpMessageListComponent,
    HttpMessageComponent,
    HeadersComponent,
    PrettierComponent,
    HtmlComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
