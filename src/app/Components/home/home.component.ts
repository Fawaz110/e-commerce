import { AfterViewInit, Component } from '@angular/core';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/Core/Services/categories.service';
import gsap from 'gsap';

// gsap.registerPlugin(ScrollTrigger)

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
  // initScrollTrigger() {
  //   const t = gsap.to('.new-products', {
  //     scrollTrigger: {
  //       trigger: '.new-products',
  //       scrub: true
  //     },
  //     duration: 2,
  //     opacity: 1,
  //     scale: 1,
  //     animationDelay: 2
  //   })
  // }
  // initialAnimation() {
  //   const t = gsap.from('.new-products', {
  //     duration: 0.5,
  //     opacity: 0,
  //     y: -20,
  //     stagger: 0.2,
  //     delay: 0.5,
  //   })
  // }
  ngAfterViewInit(): void {
    // this.initialAnimation()
    // this.initScrollTrigger()
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
