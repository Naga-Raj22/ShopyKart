import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products-orderby',
  templateUrl: './view-products-orderby.component.html',
  styleUrls: ['./view-products-orderby.component.css'],
})
export class ViewProductsOrderbyComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  searchDate = '';
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.searchDate = data.date;
    });
  }
}
