import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap, toArray } from "rxjs/operators";
import { DataService } from "./data.service";
import { User } from "./user";
import { UserData } from "./userdata";
import { UsersList } from "./userslist";

@Injectable({
  providedIn: DataService})

export class DataTableService implements UserData {
  private _users: User[] = UsersList;
  private _user: User;
  

  public getUsers(): Observable<User[]> {
    return of(this._users);
  }
  public deleteUser(_id: string): Observable<User> {
    this._users = this._users.filter(user => user._id !== _id ? this._user = user : this._user = null);
    return of(this._user);
  }
  public createUser(data: User): Observable<User> {
    /*this._users.push(data);*/
    return of(data);
  }
  public getUserById(_id: string): Observable<User[]> {
    this._user = this._users.find(user => user._id === _id);
    return of(this._user).pipe(
      toArray(),
    );
  }

  public updateUser(_id: string, data: User): Observable<User> {
    this._users.forEach(user => {
      if (user._id === _id) {
        user.surname = data.surname;
        user.name = data.name;
        user.middleName = data.middleName;
        user.birthday = data.birthday;
        user.coefficient = data.coefficient;
      }
    });
    return of(this._user);
  }
  public getCountUsers(): Observable<Number> {
    return of(this._users.length);
  }

}

