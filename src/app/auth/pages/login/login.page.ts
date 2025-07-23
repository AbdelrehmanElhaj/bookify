import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.email, this.password);

    if (success) {
      const role = this.authService.getRole();
      if (role === 'admin') {
        this.router.navigate(['/admin/pages/dashboard']);
      } else {
        this.router.navigate(['/tabs']);
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
