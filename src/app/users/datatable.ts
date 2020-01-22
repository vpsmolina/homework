import { User } from "./user";

export const USERS: User[] = [
    {id: 1, surname: "Иванов", name: "Иван",  middleName: "Александрович", birthday: new Date(1994, 8, 16).getTime(), coefficient: 5},
    {id: 2, surname: "Петров", name: "Петр",  middleName: "Алексеевич", birthday: new Date(1995, 7, 24).getTime(), coefficient: 4},
    {id: 3, surname: "Алексеев", name: "Алексей",  middleName: "Андреевич", birthday: new Date(1996, 4, 21).getTime(), coefficient: 2},
    {id: 4, surname: "Александров", name: "Александр",  middleName: "Иванович", birthday: new Date(1998, 5, 14).getTime(), coefficient: 3},
    {id: 5, surname: "Титова", name: "Ирина",  middleName: "Михайловна", birthday: new Date(1997, 8, 11).getTime(), coefficient: 4},
    {id: 6, surname: "Шапкина", name: "Оксана",  middleName: "Андреевна", birthday: new Date(1999, 3, 28).getTime(), coefficient: 5},
  ];


