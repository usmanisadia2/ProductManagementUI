import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interface/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(items: Product[], searchProductName: string): any {
    if (searchProductName === "") {
      return items;
    }
    const products: Product[] = [];
    searchProductName = searchProductName.toLowerCase() ;
    for (let i = 0; i < items.length; i++) {
      let productName: string = items[i].productName.toLowerCase();
      if (productName.includes(searchProductName)) {
        products.push(items[i])
      }
    }
    return products;
  }
}
