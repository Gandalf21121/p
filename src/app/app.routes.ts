import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path:'createOrder',
        component:CreateOrderComponent
    },
    {
        path:'myOrder',
        component:MyOrderComponent
    }
];
