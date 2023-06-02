import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(private router: Router) {}
  handleLogin() {
    if (this.user.valid) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/not-found']);
    }
  }
}
