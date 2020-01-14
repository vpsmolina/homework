import { formatNumber } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { UserFormValue } from "../models/user-form-value.model";
import { DatatableService } from "../users/datatable.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.less"]
})


export class UserFormComponent implements OnInit {
  fullNameControl: FormGroup;

  constructor(private dataTable: DatatableService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.fullNameControl = new FormGroup({
      fullName: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        surname: new FormControl(null, [Validators.required]),
        middleName: new FormControl(null, [Validators.required]),
      }),
      birthday: new FormControl(null, [Validators.required, dateValidator]),
      coefficient: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit(): void {
    const controls = this.fullNameControl.controls;
    if (this.fullNameControl.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
    } else {
      this.dataTable.users.push(convertFormData(this.fullNameControl.value));
    }
  }
}

function dateValidator (formControl: FormControl): FormControl | ValidationErrors {
  if (formControl.value) {
    const nday = new Date;
    const bday = formControl.value.split("-")[0];
    if (bday > (nday.getFullYear() - 10)) {
      return {dateValidator: {message: "Не младше десяти лет"}};
    }
    return null;
  }
}

// tslint:disable-next-line:typedef
function convertFormData (formValue: UserFormValue) {
  return {
    ...formValue,
    id: Math.floor(Math.random() * Math.random()),
    name: formValue.fullName.name,
    middleName: formValue.fullName.middleName,
    surname: formValue.fullName.surname
  };
}

