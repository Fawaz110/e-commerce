import { authGuard } from './Core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { NoFoundComponent } from './Components/no-found/no-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { AboutComponent } from './Components/about/about.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { OrderComponent } from './Components/order/order.component';
import { SettingComponent } from './setting/setting/setting.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home', canActivate: [authGuard] },
      { path: 'products', component: ProductsComponent, title: 'Products' },
      { path: 'about', component: AboutComponent, title: 'About Me' },
      { path: 'testimonials', component: TestimonialsComponent, title: 'Testimonials' },
      { path: 'services', component: ServicesComponent, title: 'Services' },
      { path: 'products', component: ProductsComponent, title: 'Products' },
      { path: 'contact-us', component: ContactUsComponent, title: 'Contact us' },
      { path: 'products/:id', component: ProductDetailsComponent, title: 'Product' },
      { path: 'cart', component: CartComponent, title: 'Cart' },
      { path: 'place-order/:id', component: OrderComponent, title: 'Order' },
      { path: 'wish-list', component: WishListComponent, title: 'Wishlist' },
      { path: 'setting', component: SettingComponent, title: 'Settings', loadChildren: () => import("./setting/setting.module").then((m) => m.SettingModule) },
    ]
  },
  {
    path: '', component: BlankLayoutComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: 'setting', component: SettingComponent, title: 'Settings', loadChildren: () => import("./setting/setting.module").then((m) => m.SettingModule) },
    ]
  },
  { path: 'allorders', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoFoundComponent, title: 'Not Found Page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
