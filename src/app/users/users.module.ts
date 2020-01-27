import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "../common/common.module";
import { UserFormComponent } from "../user-form/user-form.component";
import { UsersHttpComponent } from "../users-http/users-http.component";
import { UsersComponent } from "./users.component";

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UsersHttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
  ],
})
export class UsersModule {
}
