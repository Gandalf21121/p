import { Image } from './../../model/Product';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ApiProductItem } from '../../model/Product';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  masterservice = inject(MasterService);
  products = signal<ApiProductItem[]>([]);
  originalProducts = signal<ApiProductItem []>([]);
  images = signal<Image[]>([]);
  
  itemsPerPage = 16;
  currentPage = signal(1);

  // Computed property to get paginated products
  paginatedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products().slice(start, end);
    
  });

  ngOnInit(): void {
    this.LoadProducts();
    this.LoadImages();  
    
  }

  filterProductsByRating(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value===""){
      this.resetFilter();
      return;
    }
    const rating = Number(target.value);
    this.products.set(this.originalProducts().filter(item => item.rating === rating));
    }
  
  

  LoadProducts() {
    this.masterservice.getApiProducts().subscribe((res) => {
      this.originalProducts.set(res);
      this.products.set(res);
      console.log(this.products());  // Check if products are loaded
      this.updateImages();  // Call updateImages once products are loaded
    });
  }

  LoadImages() {
    this.masterservice.getApiImages().subscribe((res) => {
      this.images.set(res);
      console.log(this.images());  // Check if images are loaded
      this.updateImages();  // Call updateImages once images are loaded
    });
  }
  updateImages() {
    const updatedProducts = this.originalProducts().map((product, index) => ({
      ...product,
      image: this.images()[index] ? this.images()[index].download_url : product.image  // Assign image if available
    }));

    // Ensure both signals are updated
    
    this.products.set(updatedProducts);  // Update both signals with new products having images
    this.originalProducts.set(updatedProducts);
  
  }
  

  filter100() {
    this.currentPage.set(1); // Reset pagination
    this.products.set(this.originalProducts().filter(item => item.price < 100));
  }

  filter200() {
    this.currentPage.set(1);
    this.products.set(this.originalProducts().filter(item => item.price > 100 && item.price < 200));
  }

  filter200plus() {
    this.currentPage.set(1);
    this.products.set(this.originalProducts().filter(x => x.price > 200));
  }

  resetFilter(){
    this.currentPage.set(1);
    this.products.set(this.originalProducts());
  }

  nextPage() {
    if (this.currentPage() * this.itemsPerPage < this.products().length) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }
}
