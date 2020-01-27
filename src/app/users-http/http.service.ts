import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../data-table/user";

@Injectable({providedIn: "root"})
export class HttpService {
  public users: User[] = [];

  // tslint:disable-next-line:no-any
  constructor(private http: HttpClient, noticeService: any) {}

  getData(): Observable<User[]> {
    return this.http.get<User[]>("users.json")
      .pipe(tap(users => this.users = users));
  }
}
