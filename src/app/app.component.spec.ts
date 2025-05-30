import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './core/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        AuthenticationService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: '123' }) }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
