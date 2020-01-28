import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users-root",
  templateUrl: "./users-root.component.html",
  styleUrls: ["./users-root.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersRootComponent implements OnInit {
  ngOnInit(): void {}
}
