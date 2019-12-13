<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { User } from "./user";


@Injectable({providedIn: "root"})
export class DataTable {
  public users: User[] = [
    {id: 1, name: "Иван", surname: "Иванов", middlename: "Александрович", birthday: new Date("1994-08-16"), coefficient: 2},
    {id: 2, name: "Петр", surname: "Петров", middlename: "Алексеевич", birthday: new Date("1995-07-24"), coefficient: 4},
    {id: 3, name: "Алексей", surname: "Алексеев", middlename: "Андреевич", birthday: new Date("1996-04-21"), coefficient: 5},
  ];

  removeUser( id: number): void {
    this.users = this.users.filter(t => t.id !== id);
  }
}




=======
import { Injectable } from "@angular/core";
import { User } from "./user";


@Injectable({providedIn: "root"})
export class DataTable {
  public users: User[] = [
    {id: 1, name: "Иван", surname: "Иванов", middlename: "Александрович", birthday: new Date("1994-08-16"), coefficient: 2},
    {id: 2, name: "Петр", surname: "Петров", middlename: "Алексеевич", birthday: new Date("1995-07-24"), coefficient: 4},
    {id: 3, name: "Алексей", surname: "Алексеев", middlename: "Андреевич", birthday: new Date("1996-04-21"), coefficient: 5},
  ];

  removeUser( id: number): void {
    this.users = this.users.filter(t => t.id !== id);
  }
}




>>>>>>> origin/master
