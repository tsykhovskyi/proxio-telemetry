import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelemetryComponent } from './page/telemetry/telemetry.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: '', component: TelemetryComponent },
  { path: 'login', component: LoginComponent },
  { path: ':domain', component: TelemetryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
