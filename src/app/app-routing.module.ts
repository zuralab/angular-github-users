import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./pages/user-list/user-list.component";
import {UserDetailsComponent} from "./pages/user-details/user-details.component";

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'details/:name', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
