import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UsersHttpComponent } from "./users-http.component";

describe("UsersHttpComponent", () => {
  let component: UsersHttpComponent;
  let fixture: ComponentFixture<UsersHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
