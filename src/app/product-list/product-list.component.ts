import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(productName: String) {
    window.alert('The product (' + productName + ') has been shared!');
  }

  onNotify(productName: String) {
    window.alert('You will be notified when the product (' + productName + ') goes on sale.')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/