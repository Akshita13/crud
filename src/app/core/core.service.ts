import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { structure } from '../structure.model';

@Injectable()
export class CoreService {

  private studenturl = 'api/students';  // URL to web api



  constructor(private http: HttpClient) {



  }
  getdata(): Observable<structure[]> {
    return this.http.get<structure[]>(this.studenturl)
  }

}
