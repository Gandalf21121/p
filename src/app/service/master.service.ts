import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

// filepath: c:\angular files\practice\2103\p\src\app\service\master.service.ts
apiProductsUrl: string = 'https://cors-anywhere.herokuapp.com/https://freetestapi.com/api/v1/products';  
apiImagesUrl:string = 'https://picsum.photos/v2/list?page=1&limit=50'
  constructor(private http:HttpClient){
  }
  
  getApiProducts():Observable<[]>{
    return this.http.get<[]>(this.apiProductsUrl) 
  }

  getApiImages():Observable<[]>{
    return this.http.get<[]>(this.apiImagesUrl)
  }
}
