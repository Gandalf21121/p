import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ApiProductItem, ApiResponseModel } from '../../model/Product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  masterService=inject(MasterService)
  products=signal<ApiProductItem []>([])
  ngOnInit(): void {
    
  }

  loadProducts(){
    this.masterService.getAllProducts().subscribe((res:ApiResponseModel)=>{
      this.products.set(res.data)
    })
  }
}
