import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";


@Injectable({providedIn: "root"})
export class DatatableService {
  public users: User[] = [
    {id: 1, surname: "Иванов", name: "Иван",  middleName: "Александрович", birthday: new Date("1994-08-16"), coefficient: 5},
    {id: 2, surname: "Петров", name: "Петр",  middleName: "Алексеевич", birthday: new Date("1995-07-24"), coefficient: 4},
    {id: 3, surname: "Алексеев", name: "Алексей",  middleName: "Андреевич", birthday: new Date("1996-04-21"), coefficient: 2},
    {id: 4, surname: "Александров", name: "Александр",  middleName: "Иванович", birthday: new Date("1998-05-14"), coefficient: 3},
    {id: 5, surname: "Титова", name: "Ирина",  middleName: "Михайловна", birthday: new Date("1997-08-11"), coefficient: 4},
    {id: 6, surname: "Шапкина", name: "Оксана",  middleName: "Андреевна", birthday: new Date("1999-03-28"), coefficient: 5},
  ];
  public nowDate: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
  public removeUser( id: number): void {
    this.users = this.users.filter(t => t.id !== id);
  }
  public editUser( id: number): void {
  }
}

