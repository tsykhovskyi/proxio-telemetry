import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelemetryComponent } from './page/telemetry/telemetry.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpMessageListComponent } from './ui/http-message-list/http-message-list.component';
import { HttpMessageInfoComponent } from './ui/http-message/http-message-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeadersComponent } from './ui/http-message/headers/headers.component';
import { PrettierComponent } from './ui/http-message/prettier/prettier.component';
import { HtmlComponent } from './ui/http-message/prettier/html/html.component';
import { ImageComponent } from './ui/http-message/prettier/image/image.component';
import { JsonComponent } from './ui/http-message/prettier/json/json.component';
import { ExpandedNodesPipe } from './utility/render/expanded-nodes.pipe';
import { JsonFilterPipe } from './utility/render/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { LoginComponent } from './page/login/login.component';
import { FilterComponent } from './ui/filter/filter.component';
import { DomainInterceptor } from './data-access/interceptors/domain.interceptor';
import { AuthenticationInterceptor } from './data-access/interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TelemetryComponent,
    HttpMessageListComponent,
    HttpMessageInfoComponent,
    HeadersComponent,
    PrettierComponent,
    HtmlComponent,
    ImageComponent,
    JsonComponent,
    ExpandedNodesPipe,
    JsonFilterPipe,
    NavbarComponent,
    LoginComponent,
    FilterComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatTabsModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
