import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data-table/data.service";
import { User } from "../data-table/user";
import { UserData } from "../data-table/userdata";
import { UserEvents } from "../data-table/userevents";
import { UsersService } from "../data-table/users.service";
import { UsersList } from "../data-table/userslist";
import { UserFormComponent } from "../user-form/user-form.component";


@Component({
  selector: "app-users",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.less"],
})
export class UsersComponent implements OnInit {
  public type = true;
  public index: number;
  public target: string;
  public title: string = "Journal";
  public searchName: string = "";
  public action: UserEvents;
  public user: User;
  public users: User[] = UsersList;
  public isDisplayed: boolean;

  constructor(@Inject(DataService) private dataService: UserData,
              private router: Router,
              private usersService: UsersService) {
  }
  public hideForm(displayed: boolean): void {
    this.isDisplayed = displayed;
  }
  public addForm(displayed: boolean): void {
    this.isDisplayed = !displayed;
    this.action = UserEvents.add;
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

  public trackByFn(index: number, user: User): number {
    return user.id;
  }
  public deleteUser(_id: string): void {
    this.usersService.debug() ? this.router.navigate([`delete/${_id}`], {queryParams: {debug: true}}) : this.router.navigate([`delete/${_id}`]);
  }
  public addUser(): void {
    this.usersService.debug() ? this.router.navigate([`add`], {queryParams: {debug: true}}) : this.router.navigate([`add`]);
  }
  public editUser(_id: string): void {
    this.usersService.debug() ? this.router.navigate([`edit/${_id}`], {queryParams: {debug: true}}) : this.router.navigate([`edit/${_id}`]);
  }
  public actions(userform: UserFormComponent): void {
    switch (UserEvents[userform.piece]) {
      case 1: {
        if (userform.confirm) {
          this.dataService.createUser(userform.data).subscribe(() => {
            this.users.push(userform.data);
          });
        }
        break;
      }
      case 2: {
        if (userform.confirm) {
          this.dataService.updateUser(userform.userId, userform.data).subscribe(() => {
            this.users.forEach(user => {
              if (user._id === userform.userId) {
                user.surname = userform.data.surname;
                user.name = userform.data.name;
                user.middleName = userform.data.middleName;
                user.birthday = userform.data.birthday;
                user.coefficient = userform.data.coefficient;
              }
            });
          });
        }
        break;
      }
      case 0: {
        if (userform.confirm) {
          this.dataService.deleteUser(userform.userId).subscribe(() => {
            this.users = this.users.filter(user => user._id !== userform.userId);
          });
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  private _reloadUsers(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  ngOnInit(): void {
    this._reloadUsers();
  }
}




