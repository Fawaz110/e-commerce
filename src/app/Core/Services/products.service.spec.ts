import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ProductsService } from "./products.service";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment.development";

describe("Products Service", () => {
    let service: ProductsService;
    let _HttpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductsService]
        });
        service = TestBed.inject(ProductsService);
        _HttpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        _HttpTestingController.verify();
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch all products', () => {
        const products: [] = [];

        service.getAllProducts().subscribe(products => {
            expect(products).toEqual(products);
        });

        const req = _HttpTestingController.expectOne(environment.baseUrl + 'products');
        expect(req.request.method).toBe('GET');

        req.flush(products);
    });

    it('should fetch specific product by ID', () => {
        
        const productId = '123';
        const mockProduct = { id: productId, name: 'Product 1', price: 10 };

        service.getSpecificProduct(productId).subscribe(product => {
            expect(product).toEqual(mockProduct);
        });

        const req = _HttpTestingController.expectOne(environment.baseUrl + `products/${productId}`);
        expect(req.request.method).toBe('GET');

        req.flush(mockProduct);
    });


})