import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { USERS } from "./datatable";
import { User } from "./user";


@Component({
  selector: "app-users",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.less"]
})
export class UsersComponent implements OnInit {
  public users = USERS;
  private searchName: string = "";
  public _editMode: boolean = false;
  public type = true;


  public removeUser( id: number): void {
    this.users = this.users.filter(t => t.id !== id);
  }
  public editUser( id: number): void {
  }
  trackByFn(index: number, user: User): number {
    return user.id;
  }
  public sortUser(field: string, type?: string): void {
    if (type && type === "true") {
      this.type = true;
    } else if (type && type === "false") {
      this.type = false;
    }
    this.users.sort((a, b): number => {
      if (this.type) {
        if (a[field] > b[field]) {
          return 1;
        }
        if (a[field] < b[field]) {
          return -1;
        }
      } else {
        if (a[field] > b[field]) {
          return -1;
        }
        if (a[field] < b[field]) {
          return 1;
        }
        return 0;
      }
    });
    this.type = !this.type;
  }

  ngOnInit(): void {
  }

}




