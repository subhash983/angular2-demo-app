import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
  </ul>
  <hr />
  <router-outlet></router-outlet>
`,
})
export class AppComponent {
  name = 'Subhash Jha';
  email = 'test@gmail1.com';
  address = {
    street: 'Munnekolala',
    city: 'Bangalore',
    state: 'Karnataka'
  };
}
