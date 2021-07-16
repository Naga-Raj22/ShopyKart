import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Product } from './product';
import { Category } from '../site-framework/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategories(): Observable<Category> {
    const categoryUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }

  createproduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
  }

  viewProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.get<Product>(productUrl);
  }
  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }
  deleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;
    return this.httpClient.delete<Product>(productUrl);
  }
  searchCategoryProduct(categoryId: any): Observable<Product> {
    const productUrl =
      'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpClient.get<Product>(productUrl);
  }
  searchDateProduct(searchDate: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/date=' + searchDate;
    return this.httpClient.get<Product>(productUrl);
  }
}
