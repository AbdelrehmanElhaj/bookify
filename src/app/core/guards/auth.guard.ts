import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const role = this.authService.getRole();

    if (!role) {
      return this.router.createUrlTree(['/auth/pages/login']);
    }

    // Optionally check for required role
    const expectedRole = route.data['role'];
    if (expectedRole && role !== expectedRole) {
      return this.router.createUrlTree(['/auth/pages/login']);
    }

    return true;
  }
}
