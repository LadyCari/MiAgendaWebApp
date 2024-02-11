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

  public realizarPut(url: string, id: number, update: any): Observable<boolean> {
    return this.http.put<boolean>(url + id, update);
  }

  public realizarDelete(url: string, id: number): Observable<boolean> {
    return this.http.delete(url + id)
    .pipe(
      map(respuesta => true),
      catchError(error => of (false))
    );
  }
}
