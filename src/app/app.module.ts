import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './admin/user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { MatIconModule } from '@angular/material/icon';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { EditProductsComponent } from './admin/edit-products/edit-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    FooterComponent,
    UserComponent,
    LogoutComponent,
    AddProductsComponent,
    AdminProductsComponent,
    EditProductsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
