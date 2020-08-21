import { Component, OnInit } from '@angular/core';
import { ProductWebService } from '../services/product-web.service';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private webService: ProductWebService, private router: Router) { }

  ngOnInit(): void {
    this.getData() ;
  }

  url: string = "product" ;
  productsList: Array<Product> ;
  product: Product = undefined ;

  getData(): void {
    this.webService.get(this.url + "/allProducts").subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.productsList = response.data
    })
  }

  getProduct(product: Product): void{
    this.webService.get(this.url+"/"+product.productId).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.product = response.data
    })
  }

  onSelect(product: Product){
    this.router.navigate(['user/searchProduct',product.productId])  
  }

  
}
