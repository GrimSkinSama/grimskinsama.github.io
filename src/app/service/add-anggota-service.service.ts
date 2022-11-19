import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, Observable } from 'rxjs';
import { Anggota } from '../model/anggota';

@Injectable({
  providedIn: 'root'
})
export class AddAnggotaService {
  private baseUrl: string = "http://localhost:3000";
  private anggotaUrl: string = "http://localhost:3000/freelancers";

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})}

  getAnggota(): Observable<Anggota[]>{
    return this.http.get<Anggota[]>(this.anggotaUrl)
  }

  getAnggotaById(id: number): Observable<Anggota>{
    const urlById = `${this.anggotaUrl}/${id}`
    return this.http.get<Anggota>(urlById)
  }

  addNewAnggota(people: Anggota): Observable<Anggota>{
    return this.http.post<Anggota>(this.anggotaUrl, people, this.httpOptions);
  }

  countAnggota(): Observable<any>{
    return this.http.get<any>(this.anggotaUrl, {observe: 'response'});
  }

  deleteAnggotaById(id: number): Observable<Anggota> {
    return this.http.delete<Anggota>(this.anggotaUrl+'/'+id);
  }
}
