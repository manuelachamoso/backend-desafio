import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3333/users/"

  constructor(private http: HttpClient) {}

  getUsers(): Observable <any> {
    return this.http.get(this.url);
  }

  eliminarUsers(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  actualizarUsers(id: any, name: string): Observable<any> {
    return this.http.put(this.url + id, {'name': name})
  }

  guardarUsers(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  obtenerUser(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }
}
