import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyRouteRoutes } from './my-route.routing';


@NgModule({
  imports: [MyRouteRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule { }
