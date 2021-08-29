import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { EwoksComponent } from './ewoks/ewoks.component';
import { LoginComponent, WildComponent } from "@ewok/ui-login";
import { EwokComponent } from './ewok/ewok.component';


const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'ewoks', component: EwoksComponent},
  {path: 'ewoks/:id', component: EwokComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
