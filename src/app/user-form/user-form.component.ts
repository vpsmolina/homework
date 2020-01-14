import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { UserFormValue } from "../models/user-form-value.model";
import { USERS } from "../users/datatable";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class UserFormComponent implements OnInit {
  fullNameControl: FormGroup;
  public users = USERS;
  @Input() title: string;

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
      birthday: new FormControl(null, [Validators.required, this.dateValidator]),
      coefficient: new FormControl(null, [Validators.required]),
    });
  }
  @Output()
  public onSubmit(): void {
    const controls = this.fullNameControl.controls;
    if (this.fullNameControl.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
    } else {
      this.users.push(this.convertFormData(this.fullNameControl.value));
    }
  }


  @Input()
  public dateValidator (formControl: FormControl): FormControl | ValidationErrors {
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
  public convertFormData (formValue: UserFormValue) {
    return {
      ...formValue,
      id: Math.floor(Math.random() * Math.random()),
      name: formValue.fullName.name,
      middleName: formValue.fullName.middleName,
      surname: formValue.fullName.surname
    };
  }
}
