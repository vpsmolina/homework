import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from "./data-table/data.service";
import { DataTableService } from "./data-table/datatable.service";
import { UsersService } from "./data-table/users.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
  ],
  providers: [UsersService, {
    provide: DataService, deps: [UsersService], useFactory: (usersService) => {
      if (usersService.debug()) {
        return new DataTableService();
      }
      return;
    }
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
