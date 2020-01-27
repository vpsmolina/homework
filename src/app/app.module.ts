import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { DataService } from "./data-table/data.service";
import { DataTableService } from "./data-table/datatable.service";
import { UsersService } from "./data-table/users.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UsersRootComponent } from "./users-root/users-root.component";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    UsersRootComponent,
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

  bootstrap: [UsersRootComponent]
})
export class AppModule { }
