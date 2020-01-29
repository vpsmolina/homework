import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data-table/data.service";
import { User } from "../data-table/user";
import { UserData } from "../data-table/userdata";
import { UserEvents } from "../data-table/userevents";
import { UsersService } from "../data-table/users.service";


@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class UserFormComponent implements OnInit {
  public formUser: FormGroup;
  public title: string;
  public userId: string;
  public target = " ";
  public action: Number;
  public piece: string;
  public count: number;
 /* public currentDate = new Date().getFullYear() - 10;*/
  public confirm: boolean = false;
  public data: User = {birthday: undefined, name: "", id: 0, surname: "", middleName: "", coefficient: 0};

  constructor(@Inject(DataService) private dataService: UserData,
              private router: Router, private activatedRoute: ActivatedRoute,
              private usersService: UsersService) {}

  public convertDate(date: Date): string {
    const cDate = new Date(date);
    const month = cDate.getMonth() + 1;
    const stMonth: string = (month < 10) ? "0" + month : month.toString();
    const stDay: string = (cDate.getDate() < 10) ? "0"  + cDate.getDate() : cDate.getDate().toString();
    return cDate.getFullYear() + "-" + stMonth + "-" + stDay;
  }
  public initAddUserForm(): void {
    this.formUser = new FormGroup({
      fullName: new FormGroup({
        surname: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        middleName: new FormControl(null, [Validators.required]),
      }, {validators: this.nameValidator}),
      birthday: new FormControl(null, [Validators.required, this.dateValidator]),
      coefficient: new FormControl(null, [Validators.required, Validators.pattern("[0-9]")] ),
    });
    this.dataService.getCountUsers().subscribe(num => this.count = +num);
    }
  public initEditUserForm(): void {
    this.formUser = new FormGroup({
      fullName: new FormGroup({
        surname: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        middleName: new FormControl(null, [Validators.required])
      }, {validators: this.nameValidator}),
      birthday: new FormControl(null, [Validators.required, this.dateValidator]),
      coefficient: new FormControl(null, [Validators.required, Validators.pattern("[0-9]")]),
    });
    this.dataService.getUserById(this.userId).subscribe((user) => {
      const editUser = {
        fullName: {
          surname: user[0].surname,
          name: user[0].name,
          middleName: user[0].middleName
        },
        birthday: this.convertDate(new Date(user[0].birthday)),
        coefficient: user[0].coefficient
      };
      this.data.id = user[0].id;
      this.data._id = user[0]._id;
      this.formUser.setValue(editUser);
    });
  }

  public dateValidator (formControl: FormControl): FormControl | ValidationErrors {
    if (formControl.value) {
      const nday = new Date;
      const bday = new Date(formControl.value);
      if ((bday.getFullYear()) > (nday.getFullYear() - 10)) {
        return {dateValidator: {message: "The student must be over 10 years old."}};
      }
      return null;
    }
  }
  public nameValidator (formGroup: FormGroup): FormControl | ValidationErrors {
    if (formGroup.value) {
      const enterSurname = formGroup.value.surname;
      const enterName = formGroup.value.name;
      const enterMiddleName = formGroup.value.middleName;
      if (enterSurname === enterName || enterSurname === enterMiddleName || enterName === enterMiddleName) {
        return {nameValidator: {message: "The data entered must be different."}};
      }
    }
  }
  public onSubmit(): boolean {
    const controls = this.formUser.controls;
    if (this.formUser.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return false;
    }
    if (this.action === 1) {
      if (this.usersService.debug()) {
        this.data._id = "id00000" + this.count;
      }
      this.data.id = this.count + 1;
      this.data.birthday = new Date(this.formUser.value.birthday);
      this.data.surname = this.formUser.value.fullName.surname;
      this.data.name = this.formUser.value.fullName.name;
      this.data.middleName = this.formUser.value.fullName.middleName;
      this.data.coefficient = this.formUser.value.coefficient;
      this.hideForm();
      this.confirm = true;
    }
    this.data.birthday = new Date(this.formUser.value.birthday);
    this.data.surname = this.formUser.value.fullName.surname;
    this.data.name = this.formUser.value.fullName.name;
    this.data.middleName = this.formUser.value.fullName.middleName;
    this.data.coefficient = this.formUser.value.coefficient;
    this.hideForm();
    this.confirm = true;
  }
  public hideForm(): void {
    this.usersService.debug() ? this.router.navigate([""], {queryParams: {debug: true}}) : this.router.navigate([""]);
    this.confirm = false;
  }
  public confirmForm(): void {
    this.confirm = !this.confirm;
    this.usersService.debug() ? this.router.navigate([""], {queryParams: {debug: true}}) : this.router.navigate([""]);
  }
  private _action(piece: string): void {
    switch (UserEvents[piece]) {
      case 1: {
        this.title = "Add new student";
        this.action = 1;
        this.initAddUserForm();
        break;
      }
      case 2: {
        this.title = "Edit";
        this.action = 2;
        this.activatedRoute.params.subscribe(param => this.userId = param.id);
        this.initEditUserForm();
        break;
      }
      case 0: {
        this.title = "Confirmation";
        this.action = 0;
        this.activatedRoute.params.subscribe(param => this.userId = param.id);
        this.initEditUserForm();
        break;
      }
      default: {
        break;
      }
    }
  }
  ngOnInit(): void {
    this.piece = this.activatedRoute.snapshot.url[0].path;
    this._action(this.piece);
  }

}
