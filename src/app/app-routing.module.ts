import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ProductViewComponent } from './product-view/product-view.component';


const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: ProductViewComponent},
  {path: 'admin', component: AdminNavComponent},
  {path: 'admin/product', component: ProductAdminComponent},
  {path: 'user/searchProduct', component: SearchProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ ProductViewComponent, ProductAdminComponent,
            SearchProductComponent, AdminNavComponent]
