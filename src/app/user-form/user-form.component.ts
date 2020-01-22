import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { UserFormValue } from "../models/user-form-value.model";
import { USERS } from "../users/datatable";
import { User } from "../users/user";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class UserFormComponent implements OnInit, OnChanges {

  public users = USERS;
  @Input() index: number;
  @Input() title: string;
  @Input() target = " ";
  @Input()
  set indexElement(index: number) {
    this.index = index;
  }


  fullNameControl = new FormGroup({
    fullName: new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      middleName: new FormControl(null, [Validators.required]),
    }),
    birthday: new FormControl(null, [Validators.required, this.dateValidator]),
    coefficient: new FormControl(null, [Validators.required]),
  });

  public onSubmit(): void {
    const controls = this.fullNameControl.controls;
    if (this.fullNameControl.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
    } else {
      this.users.push(this.convertFormData(this.fullNameControl.value));
    }
  }
  public editUsers(users: User, index: number): void {
    this.users[index] = users;
  }

  @Output() public editUser(index: number): void {
    console.log(this.target);
    this.editUsers(this.convertFormData(this.fullNameControl.value), index);
  }



  public dateValidator (formControl: FormControl): FormControl | ValidationErrors {
    if (formControl.value) {
      const nday = new Date;
      const bday = new Date(formControl.value);
      if ((bday.getFullYear()) > (nday.getFullYear() - 10)) {
        return {dateValidator: {message: "Не младше десяти лет"}};
      }
      return null;
    }
  }
  @Output()
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
  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.index) {
      this.fullNameControl.get("fullName").get("name").setValue(this.users[this.index].name);
      this.fullNameControl.get("fullName").get("surname").setValue(this.users[this.index].surname);
      this.fullNameControl.get("fullName").get("middleName").setValue(this.users[this.index].middleName);
      this.fullNameControl.get("birthday").setValue(this.users[this.index].birthday);
      this.fullNameControl.get("coefficient").setValue(this.users[this.index].coefficient);
    }
  }
}
