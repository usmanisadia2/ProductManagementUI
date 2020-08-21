import { Component, OnInit } from '@angular/core';
import { ProductWebService } from '../services/product-web.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../interface/product';
import {Route} from '@angular/compiler/src/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  constructor(private router: Router, private webService: ProductWebService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm() ;
    this.getData() ;
  }

  url: string = "product" ;
  productsList: Array<Product>
  product: Product = undefined
  myForm: FormGroup ;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
 

  createForm(){
    this.myForm = this.formBuilder.group({
      productName: new FormControl(this.product ? this.product.productName : '', Validators.required),
      specification : new FormControl(this.product ? this.product.specification : '', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]),
      colour : new FormControl(this.product ? this.product.colour : '', [Validators.required]),
      dimension : new FormControl(this.product ? this.product.dimension : '', [Validators.required]),
      price : new FormControl(this.product ? this.product.price : '', [Validators.required]),
      manufacture : new FormControl(this.product ? this.product.manufacture : '', [Validators.required]),
      quantity : new FormControl(this.product ? this.product.quantity : '', [Validators.required]),
      productCategory : new FormControl(this.product ? this.product.productCategory : '', [Validators.required]),
      productURL : new FormControl(this.product ? this.product.productURL : '', [Validators.required, Validators.pattern(this.reg)])
    });
  }

  submitForm(data: FormGroup){
    if(data.valid){
      this.addProduct(data.value)
    }
  }

  addProduct(product: Product): void{
    if(this.product)
    product.productId = this.product.productId
    this.webService.post(this.url+"/addProduct", product).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.getData()
      this.myForm.reset()
      this.product = undefined
    }, error => {
    })
  }

  getData(): void {
    this.webService.get(this.url + "/allProduct").subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.productsList = response.data
    })
  }

  edit(product: Product): void {
    this.product = product
    this.myForm.controls['productName'].setValue(this.product.productName)
    this.myForm.controls['price'].setValue(this.product.price)
    this.myForm.controls['colour'].setValue(this.product.colour)
    this.myForm.controls['dimension'].setValue(this.product.dimension)
    this.myForm.controls['specification'].setValue(this.product.specification)
    this.myForm.controls['manufacture'].setValue(this.product.manufacture)
    this.myForm.controls['quantity'].setValue(this.product.quantity)
    this.myForm.controls['productCategory'].setValue(this.product.productCategory)
    this.myForm.controls['productURL'].setValue(this.product.productURL)
  }

  delete(product: Product): void {
    this.webService.delete(this.url+"/delete/"+product.productId, product).subscribe(res => {
      let data = JSON.parse(JSON.stringify(res))
      this.getData()
    }, error => {
    })
  }

}
