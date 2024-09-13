import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
 
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('token', btoa(`${this.username}:${this.password}`));
        this.router.navigate(['/personnes']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}

