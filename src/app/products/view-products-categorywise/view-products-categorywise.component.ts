import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-products-categorywise',
  templateUrl: './view-products-categorywise.component.html',
  styleUrls: ['./view-products-categorywise.component.css'],
})
export class ViewProductsCategorywiseComponent implements OnInit {
  productList: any;
  searchCategory = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.searchCategory = data.id;
      console.log(this.searchCategory);
      this.productsService
        .searchCategoryProduct(this.searchCategory)
        .subscribe((categoryData) => {
          this.productList = categoryData;
          console.log(this.productList);
        });
    });
  }
}
