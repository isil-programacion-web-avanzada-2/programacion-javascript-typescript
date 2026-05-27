import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const isLogged = localStorage.getItem('token');
  const router = inject(Router)

  console.log('Guard ejecutado');
  console.log('token', isLogged);

  return isLogged? true : router.navigate(['/']);
};
