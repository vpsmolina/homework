import { ChangeDetectionStrategy, Component } from "@angular/core";
import { DatatableService } from "./users/datatable.service";

@Component({
  selector: "app-root",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "Journal";
  constructor(private datatableService: DatatableService) {
  }
/*  get runChangeDetection(): boolean  {
    console.log("Checking the view");
    return;
  }*/
}
