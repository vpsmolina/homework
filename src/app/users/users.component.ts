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
  fullnameControl: FormGroup;
  fullname: FormGroup;
  constructor(private dataTable: DataTable) {
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.fullnameControl = new FormGroup({
      fullname: new FormGroup({
        name: new FormControl("", [Validators.required]),
        surname: new FormControl("", [Validators.required]),
        middlename: new FormControl("", [Validators.required]),
      }/*, {validators: nameValidator}*/),
      birthday: new FormControl("", [Validators.required, dateValidator]),
      coefficient: new FormControl("", [Validators.required]),
    });
  }
  onSubmit(): void {
    const controls = this.fullnameControl.controls;
    if (this.fullnameControl.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    console.log(this.fullnameControl.get("fullname.name").value);
    this.dataTable.users.push(this.fullnameControl.value);
  }
  removeUser(id: number): void {
    this.dataTable.removeUser(id);
  }
}
// tslint:disable-next-line:typedef
function dateValidator (formControl: FormControl) {
  const nday = new Date;
  const bday = formControl.value.split("-")[0];
  if ( bday > (nday.getFullYear() - 10) ) {
    return {dateValidator: {message: "Not found"}};
  }
  return null;
}
// tslint:disable-next-line:typedef
function nameValidator(control: FormGroup) {
  const firstname = control.get("name").value;
  const lastname = control.get("surname").value;
  const middlename = control.get("middlename").value;
  if (firstname.length > 3) {
    return {nameValidator: {message: "Not found"}};
  }
  return null;
}



