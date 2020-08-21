import { Component, OnInit } from '@angular/core';
import { ProductWebService } from '../services/product-web.service';
import { Product } from '../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private webService: ProductWebService, private router: Router) { }

  ngOnInit(): void {
    this.getData() ;
  }

  url: string = "product" ;
  productsList: Array<Product> ;
  product: Product = undefined ;
  searchText: string ;

  getData(): void {
    this.webService.get(this.url + "/allProduct").subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.productsList = response.data
    })
  }
forwardToCart(){
  this.router.navigate(['./'])
}

  
  
}
