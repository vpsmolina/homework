import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataTable } from "./datatable";
import { User } from "./user";



@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.less"]
})
export class UsersComponent implements OnInit {
  private searchName: string = "";
  nameControl: FormControl;
  fullnameControl: FormGroup;
  constructor(private dataTable: DataTable) {
  }
  ngOnInit(): void {
    this.nameControl = new FormControl("Vera");
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status);
    });
    this.fullnameControl = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      middlename: new FormControl(),
      birthday: new FormControl(),
      coefficient: new FormControl()
    });
  }


  removeUser(id: number): void {
    this.dataTable.removeUser(id);
  }
}



