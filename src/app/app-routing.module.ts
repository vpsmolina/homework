import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersComponent } from "./users/users.component";


const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "form/edit", component: UserFormComponent },
  { path: "form/create", component: UserFormComponent },
  { path: "**", component: NotFoundComponent}];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
