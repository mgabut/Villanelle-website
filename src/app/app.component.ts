import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/authentication.service';
import { NavbarSmartComponent } from './core/navbar/navbar.smart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarSmartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authenticationService = inject(AuthenticationService)

  email = signal('john.doe@gmail.com')
  password = signal('qwertz')

  register() {
    console.log('lancé')
    this.authenticationService.register('john.doe@gmail.com', 'qwertz')
      .subscribe((response) => {
        console.log('Register response:', response)
      })
    }
}
