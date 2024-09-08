import { User } from './../../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { handleError } from '../../Utils/help';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetrepetapiService {
  private apiUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<any>(`${this.apiUrl}/usuario`, user)
    .pipe(catchError(handleError))
  }

}
