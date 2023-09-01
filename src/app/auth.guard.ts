import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export function authGuard(): CanActivateFn {
  return () => {
    const oauthService: AuthService = inject(AuthService);
    
    if (oauthService.isLogin ) {
      return true;
    }
    return false;
  };
};
