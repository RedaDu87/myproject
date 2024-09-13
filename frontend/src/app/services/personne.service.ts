import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne.model';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private apiUrl = 'http://localhost:8080/api/personnes';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    // Assurez-vous d'envoyer les credentials avec la requête
    return  new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:password') // Remplacez 'username' et 'password' par les valeurs appropriées
    })
  }

  getAllPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  createPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.apiUrl, personne, { headers: this.getAuthHeaders() });
  }

  updatePersonne(id: number, personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.apiUrl}/${id}`, personne, { headers: this.getAuthHeaders() });
  }

  deletePersonne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}

