import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from "./auth.service"
import { environment } from 'src/environments/environment.development';
import { TestBed } from '@angular/core/testing';

describe('Auth Service Unit Testing', () => {
    let service: AuthService;
    let _HttpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });
        service = TestBed.inject(AuthService);
        _HttpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        _HttpTestingController.verify();
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should send a POST request to register a user successfully', () => {
        const formData = {
            name: 'Soso',
            email: 'sos.123123@gmail.com',
            password: 'Sosos@123',
            rePassword: 'Sosos@123',
            phone: '01010700700'
        };
        const mockResponse = {
            message: 'success',
            user: { name: 'Soso', email: 'sos.123123@gmail.com', role: 'user' },
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDQ1ZDhjYmU4YjUyMzIzNTk0YmFmZiIsIm5hbWUiOiJTb3NvIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTE1NjIxMjUsImV4cCI6MTcxOTMzODEyNX0.oOQ_4b4IRTQYw9FNjSJdCD4PH3ghdHX1Fs6kTtOLyZo'
        };

        service.register(formData).subscribe(response => {
            expect(response).toEqual(mockResponse);
        });
        const req = _HttpTestingController.expectOne(environment.baseUrl + 'auth/signup');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(formData);

        req.flush(mockResponse);
    });

    it('should send a POST request to register a user and handle failure response', () => {
        const formData = {
            name: 'Mustafa',
            email: 'Mustafa.123@gmail.com',
            password: 'Mustafa@123',
            rePassword: 'Mustafa@123',
            phone: '01010700700'
        };
        const mockErrorResponse = { statusMsg: 'fail', message: 'Account Already Exists' };

        service.register(formData).subscribe(
            response => fail('Expected an error, but received a successful response'),
            errorResponse => {
                expect(errorResponse.error).toEqual(mockErrorResponse);
            }
        );

        const req = _HttpTestingController.expectOne(environment.baseUrl + 'auth/signup');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(formData);
        req.flush(mockErrorResponse, { status: 400, statusText: 'Bad Request' });
    });

    it('should be login successfully', () => {
        const loginForm = { email: 'test@example.com', password: 'password123' };
        const mockResponse = {
            message: 'success',
            user: { name: 'Test User', email: 'test@example.com', role: 'user' },
            token: 'example_token'
        };

        service.login(loginForm).subscribe(response => {
            expect(response).toEqual(mockResponse);
        });

        const req = _HttpTestingController.expectOne(environment.baseUrl + 'auth/signin');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(loginForm);

        req.flush(mockResponse);
    });

    it('should fail to login', () => {
        const loginForm = { email: 'invalid@example.com', password: 'invalidpassword' };
        const mockErrorResponse = { statusMsg: 'fail', message: 'Invalid credentials' };

        service.login(loginForm).subscribe(
            response => fail('Expected an error, but received a successful response'),
            errorResponse => {
                expect(errorResponse.error).toEqual(mockErrorResponse);
            }
        );

        const req = _HttpTestingController.expectOne(environment.baseUrl + 'auth/signin');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(loginForm);

        req.flush(mockErrorResponse, { status: 400, statusText: 'Bad Request' });
    });
})