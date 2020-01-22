import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-users-http",
  templateUrl: "./users-http.component.html",
  styleUrls: ["./users-http.component.less"]
})
export class UsersHttpComponent implements OnInit {
  private loading: boolean = true;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData().subscribe(() => {
      this.loading = false;
    });
  }

}
