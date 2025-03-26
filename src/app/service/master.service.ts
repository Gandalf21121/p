import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl = 'https://freeapi.miniprojectideas.com/api/BigBasket/'
  constructor(private http :HttpClient ) { }

  getAllProducts():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(this.apiUrl + 'GetAllProducts')
  }
}

