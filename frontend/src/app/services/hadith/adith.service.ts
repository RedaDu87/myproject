import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdithService {

  urlCategorie : string = "https://hadeethenc.com/api/v1/categories/list/?language=fr";
  urlListCategorie : string ="https://hadeethenc.com/api/v1/hadeeths/list/?language=fr&category_id=32";



  constructor(private http: HttpClient) {
  }

  getHadithCategorie(): Observable<any>{
    return this.http.get(this.urlCategorie);
  }


  getHadithsList(nombre : number): Observable<any>{
    return this.http.get("https://hadeethenc.com/api/v1/hadeeths/list/?language=fr&category_id="+nombre+"&page=1&per_page=5000");
  }

  getHadithDetail(id : number){
    return this.http.get("https://hadeethenc.com/api/v1/hadeeths/one/?language=fr&id="+id);

  }
}
