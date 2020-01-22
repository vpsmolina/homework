import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../users/user";

@Injectable({providedIn: "root"})
export class HttpService {
  public users: User[] = [];
  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http.get<User[]>("users.json")
      .pipe(tap(users => this.users = users));
  }
}
