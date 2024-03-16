import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError, timeout } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  @Output() eventHttp: EventEmitter<boolean> = new EventEmitter();
  
  private requestActivas = 0;

  constructor(private http: HttpClient, private router:Router) { }

  public realizarGet(url: string, omitirLoader?: boolean, opciones?: any, timeoutMs = 30000): any {
    this.eventHttp.emit(false);
    if (!omitirLoader) {
      this.requestActivas += 1;
      /*this.loaderService.show();*/
    }
    return this.http.get(url, opciones).pipe(
      tap(_ => {
        if (!omitirLoader) {
          this.requestActivas -= 1;
        }
        if (this.requestActivas == 0) {
          /*this.loaderService.hide();*/
        }
        this.eventHttp.emit(true);
      }),
      timeout(timeoutMs),
      catchError((error: HttpErrorResponse) => {
        if (!omitirLoader) {
          this.requestActivas -= 1;
        }
        if (this.requestActivas == 0) {
          /*this.loaderService.hide();*/
        }
        this.eventHttp.emit(true);
        return this.manejarError(error, url);
      })
    );
  }

public realizarPost(url: string, datos: any, omitirLoader?: boolean, opciones?: any, timeoutMs = 30000): any{
  this.eventHttp.emit(false);
  if(!omitirLoader) {
    this.requestActivas += 1;
    /*this.loaderService.show();*/
  }
  return this.http.post(url, datos, opciones).pipe(
    tap(_ => {
      if(!omitirLoader){
        this.requestActivas -= 1;
      }
      if(this.requestActivas == 0) {
        /*this.loaderService.hide();*/
      }
      this.eventHttp.emit(true);
    }),
    timeout(timeoutMs),
    catchError((error: HttpErrorResponse) => {
      if(!omitirLoader){
        this.requestActivas -= 1;
      }
      if(this.requestActivas == 0) {
        /*this.loaderService.hide();*/
      }
      this.eventHttp.emit(true);
      return this.manejarError(error, url);
    })
  );
}

  public realizarPut(url: string, datos?: any, omitirLoader?: boolean, opciones?: any): any {
    if (!omitirLoader) {
      /*this.loaderService.show();*/
      console.log('show')
    }
    return this.http.put(url, datos, { headers: { 'Content-Type': 'application/json' } }).pipe(
      tap(_ => {
        if (!omitirLoader) {
          this.requestActivas -= 1;
        }
        /*this.loaderService.hide();*/
        this.eventHttp.emit(true);
      }),
      catchError((error: HttpErrorResponse) => {
        if (!omitirLoader) {
          this.requestActivas -= 1;
        }
        if (this.requestActivas == 0) {
          /*this.loaderService.hide();*/
        }
        this.eventHttp.emit(true);
        return this.manejarError(error, url);
      })
    );
  }

  public realizarDelete(url: string, datos?: any, omitirLoader?: boolean, opciones?: any): any {
    if (!omitirLoader) {
      /*this.loaderService.show();*/
    }
    return this.http.delete(url, datos).pipe(
      tap(_ => {
        if (!omitirLoader) {
          this.requestActivas -= 1;
        }
        if (this.requestActivas == 0) {
          /*this.loaderService.hide();*/
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (!omitirLoader) {
          this.requestActivas -= 1;
        }
        if (this.requestActivas == 0) {
          /*this.loaderService.hide();*/
        }
        return this.manejarError(error, url);
      })
    );
  }

  private manejarError(error: HttpErrorResponse, url: string) : Observable<never> {
    var mensaje = "Ha ocurrido un error en las comunicaciones. Por favor, intente nuevamente m&aacute;s tarde.";
    /*this.loaderService.hide();*/
    console.log('hide')
    if (error.status != 403) {
      //this.modalService.mostrarError(mensaje + "<br>(" + error.status + ")");
      // this.modalService.mostrarError(mensaje + "<br>(" + error.status + ")").afterClosed().subscribe(() => { ////DESCOMENTAR ESTO CUANDO PASE A PROD
      //   this.router.navigate(['/']);
      // });
    }
    else {
      // this.modalService.mostrarError('Sesion expirada').afterClosed().subscribe(() => {  ////DESCOMENTAR ESTO CUANDO PASE A PROD
      //   this.router.navigate(['/']);
      // });
      //this.modalService.mostrarError('Sesión expirada');
    }
    return throwError(() => error);
  }
}
