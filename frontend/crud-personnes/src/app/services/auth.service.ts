import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api/authenticate';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {

      console.log(username,password);
      const headers = new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password),
        'Content-Type': 'application/json'
      });
    
      return this.http.post(this.authUrl, {username : username, password : password}, { headers });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}



