import { Component, OnInit } from "@angular/core";
import { DatatableService } from "./datatable.service";
import { User } from "./user";

@Component({
  selector: "app-users",

  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.less"]
})
export class UsersComponent implements OnInit {
  private searchName: string = "";
  public _editMode: boolean = false;
  constructor(private dataTable: DatatableService) {
  }
  ngOnInit(): void {
  }
  removeUser(id: number): void {
    this.dataTable.removeUser(id);
  }
  editUser(id: number): void {
    this.dataTable.editUser(id);
  }
  trackByFn(index: number, user: User): number {
    return user.id;
  }
}




