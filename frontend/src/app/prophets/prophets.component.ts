import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prophets',
  templateUrl: './prophets.component.html',
  styleUrls: ['./prophets.component.css']
})
export class ProphetsComponent implements OnInit {
  prophets: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('../../assets/datajson/propheteHistory.json').subscribe(data => {
      this.prophets = data;
    });
  }
}
