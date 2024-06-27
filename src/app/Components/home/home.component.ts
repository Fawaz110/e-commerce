import { AfterViewInit, Component } from '@angular/core';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { auto } from '@popperjs/core';
import { CategoriesService } from 'src/app/Core/Services/categories.service';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private _ProductsService: ProductsService, private _CategoriesService: CategoriesService) {
    this.getAllProducts()
    this.getAllCategories()
  }
  initScrollTrigger() {
    
  }
  ngAfterViewInit(): void {
    this.initScrollTrigger()
  }

  products!: object[]
  categories!: any[]

  getAllProducts() {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data
      },
      error: (error) => {
        console.log(error.error.message);
      }

    })
  }
  getAllCategories() {
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response.data
      },
      error: (error) => {
        console.log(error.error.message);
      }
    })
  }



  headerOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
  }

  productsCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    lazyLoad: true
  }
}
