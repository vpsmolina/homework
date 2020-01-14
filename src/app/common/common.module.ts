import { NgModule } from "@angular/core";
import { UsersFilterPipe } from "./filter.pipe";
import { HoverDirective } from "./hover.directive";
import { MomentPipe } from "./moment.pipe";

@NgModule({
  declarations: [
    UsersFilterPipe,
    MomentPipe,
    HoverDirective,
  ],
  exports: [
    UsersFilterPipe,
    MomentPipe,
    HoverDirective,
  ],
  imports: [],
  providers: [],
})
export class CommonModule { }
