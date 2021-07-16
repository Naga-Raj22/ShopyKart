import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsCategorywiseComponent } from './view-products-categorywise/view-products-categorywise.component';
import { ViewProductsOrderbyComponent } from './view-products-orderby/view-products-orderby.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'category/:id', component: ViewProductsCategorywiseComponent },
  { path: 'search-date', component: ViewProductsOrderbyComponent },
  { path: 'view-all-products', component: ViewAllProductsComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
