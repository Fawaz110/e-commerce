import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoaderComponent } from './Core/loader/loader.component';
import { NoFoundComponent } from './Components/no-found/no-found.component';
import { SearchPipe } from './Core/Pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingCircleComponent } from './Components/rating-circle/rating-circle.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { AboutComponent } from './Components/about/about.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './Components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    SearchPipe,
    NoFoundComponent,
    RatingCircleComponent,
    WishListComponent,
    AboutComponent,
    TestimonialsComponent,
    ServicesComponent,
    ContactUsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    CarouselModule,
    RouterModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
