import { Observable } from "rxjs";
import { User } from "./user";

export interface UserData {
  getUsers(): Observable<User[]>;
  getUserById(_id: string): Observable<User[]>;
  getCountUsers(): Observable<Number>;
  createUser(data: User): Observable<User>;
  updateUser(_id: string, data: User ): Observable<User>;
  deleteUser(_id: string): Observable<User>;
}
