import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  @Output() eventHttp: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  public realizarGet(url: string): Observable<any[]>{
    return this.http.get<any[]>(url);
  }

  public realizarPost(url: string, datos: any): Observable<boolean> {
    return this.http.post<boolean>(url, datos);
  }

  public realizarPut(url: string, update: any): Observable<boolean> {
    return this.http.put<boolean>(url, update);
  }

  public realizarDelete(url: string): Observable<boolean> {
    return this.http.delete<boolean>(url);
  }
}
