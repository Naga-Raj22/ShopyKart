import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsCategorywiseComponent } from './view-products-categorywise/view-products-categorywise.component';
import { ViewProductsOrderbyComponent } from './view-products-orderby/view-products-orderby.component';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductsComponent,
    ViewProductComponent,
    ViewProductsCategorywiseComponent,
    ViewProductsOrderbyComponent,
  ],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
