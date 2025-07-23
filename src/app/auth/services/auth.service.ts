import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockUsers = [
    { email: 'user@bookify.com', password: '123456', role: 'user' },
    { email: 'admin@bookify.com', password: 'admin123', role: 'admin' }
  ];

  currentUser: any = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/auth/pages/login']);
  }

  getRole(): string | null {
    return this.currentUser?.role || JSON.parse(localStorage.getItem('user') || '{}')?.role || null;
  }

  isLoggedIn(): boolean {
    return !!this.getRole();
  }
}
