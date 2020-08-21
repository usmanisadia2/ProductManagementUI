import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FilterProductPipe } from './filter-product.pipe';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ProductWebService } from './services/product-web.service';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAdminComponent,
    ProductViewComponent,
    SearchProductComponent,
    FilterProductPipe,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
