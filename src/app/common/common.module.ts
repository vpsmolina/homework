import { NgModule } from "@angular/core";
import { UsersFilterPipe } from "./filter.pipe";
import { HoverDirective } from "./hover.directive";

@NgModule({
  declarations: [
    UsersFilterPipe,
    HoverDirective,
  ],
  exports: [
    UsersFilterPipe,
    HoverDirective,
  ],
  imports: [],
  providers: [],
})
export class CommonModule { }
