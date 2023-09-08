import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './admin/user/user.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { EditProductsComponent } from './admin/edit-products/edit-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: UserComponent,
    canActivate: [authGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
  },

  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/add-product',
    component: AddProductsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/edit-product/:id',
    component: EditProductsComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
