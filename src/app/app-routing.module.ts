import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersComponent } from "./users/users.component";

const childRoutes: Routes = [
  { path: "edit/:id", component: UserFormComponent },
  { path: "delete/:id", component: UserFormComponent },
  { path: "add", component: UserFormComponent },
];
const routes: Routes = [
  { path: "", component: UsersComponent, children: childRoutes },
  { path: "**", component: NotFoundComponent}];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
