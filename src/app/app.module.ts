import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelemetryComponent } from './page/telemetry/telemetry.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpMessageListComponent } from './ui/http-message-list/http-message-list.component';
import { HttpMessageComponent } from './ui/http-message/http-message.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeadersComponent } from './ui/http-message/headers/headers.component';
import { PrettierComponent } from './ui/http-message/prettier/prettier.component';
import { HtmlComponent } from './ui/http-message/prettier/html/html.component';
import { ImageComponent } from './ui/http-message/prettier/image/image.component';
import { JsonComponent } from './ui/http-message/prettier/json/json.component';
import { ExpandedNodesPipe } from './utility/render/expanded-nodes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TelemetryComponent,
    HttpMessageListComponent,
    HttpMessageComponent,
    HeadersComponent,
    PrettierComponent,
    HtmlComponent,
    ImageComponent,
    JsonComponent,
    ExpandedNodesPipe
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatTabsModule],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
