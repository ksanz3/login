import { Component } from "@angular/core";
import { UsersService } from "../users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/users');
    });
  }
}