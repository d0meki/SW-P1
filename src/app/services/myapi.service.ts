import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {
 // private apiUrl = "http://localhost:8080/api/luxand"
  private apiUrl = "https://rest-server-domeki.herokuapp.com/api/luxand"
  private apiFace = "https://rest-server-domeki.herokuapp.com/api/luxand/createface"
 // private apiUrl = "https://localhost:8080/api/luxand/"
 // private apiDevUrl = "http://localhost:8080/api/luxand/notification"
  private apiNotifier = "https://rest-server-domeki.herokuapp.com/api/luxand/notification"
  constructor(private http: HttpClient) { }

  reconocimientoFoto(url:string){
    const data = {
      url:url
    }
    return this.http.post(this.apiUrl,data);
  }
  enviarNotificacion(idTelefono?:string,urlImage?:string,uidEvt?:string){
    const data = {
      tittle:"Notificacion Eventos",
      body: uidEvt,
      token: idTelefono,
      image: urlImage
    }
   // return this.http.post(this.apiDevUrl,data);
    return this.http.post(this.apiNotifier,data);
  }
  registrarCara(name:string,url:string){
    const data = {
      name:name,
      url:url
    }
    return this.http.post(this.apiFace,data);
  }
}
