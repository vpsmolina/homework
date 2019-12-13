import { Pipe, PipeTransform } from "@angular/core";
import { User } from "./user";

@Pipe({
  name: "usersFilter"
})

export class UsersFilterPipe implements PipeTransform {
  transform(users: User[], search: string = ""): User[] {
    if (!search) {
      return users;
    }
    return users.filter(user => {
      return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
