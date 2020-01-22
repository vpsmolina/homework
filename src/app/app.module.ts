import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule, routing } from "./app-routing.module";
import { AppComponent } from "./app.component";


import { CommonModule } from "./common/common.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersHttpComponent } from "./users-http/users-http.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
    UsersHttpComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
