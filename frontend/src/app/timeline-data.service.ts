import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {
  private jsonUrl = '../assets/datajson/histoire.json';

  constructor(private http: HttpClient) { }

  getTimelineData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}

