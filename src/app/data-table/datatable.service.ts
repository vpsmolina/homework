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
  /*constructor(private noticeService: NoticeService) {}*/

  public getUsers(): Observable<User[]> {
    return of(this._users)/*.pipe(
      catchError(this.noticeService.handleError<User[]>("Error")),
    )*/;
  }
  public deleteUser(_id: string): Observable<User> {
    this._users = this._users.filter(user => user._id !== _id ? this._user = user : this._user = null);
    return of(this._user)/*.pipe(
      tap(() => this.noticeService.add({type: "success", message: "Student succeccfully deleted"})),
      catchError(this.noticeService.handleError<User>("Error")),
    )*/;
  }
  public createUser(data: User): Observable<User> {
    /*this._users.push(data);*/
    return of(data)/*.pipe(
      tap(() => this.noticeService.add({type: "success", message: "User successfully added"})),
      catchError(this.noticeService.handleError<User>("Error")),
    )*/;
  }
  public getUserById(_id: string): Observable<User[]> {
    this._user = this._users.find(user => user._id === _id);
    return of(this._user).pipe(
      toArray(),
      /*catchError(this.noticeService.handleError<User[]>("Error")),*/
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
    return of(this._user)/*.pipe(
      tap(() => this.noticeService.add({type: "success", message: "User successfully upadated"})),
      catchError(this.noticeService.handleError<User>("Error")),
    )*/;
  }
  public getCountUsers(): Observable<Number> {
    return of(this._users.length)/*.pipe(
      catchError(this.noticeService.handleError<Number>("Error")),
    )*/;
  }

}

