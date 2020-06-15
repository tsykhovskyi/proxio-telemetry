import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelemetryComponent } from './page/telemetry/telemetry.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';

const routes: Routes = [
  { path: 'error/:code', component: ErrorComponent },

  { path: '', component: TelemetryComponent },
  { path: 'login', component: LoginComponent },
  { path: ':domain', component: TelemetryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
