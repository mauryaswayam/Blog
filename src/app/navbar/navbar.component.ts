import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}
  
  onHome() {
    this.router.navigate(['']);
  }
  onAbout() {
    this.router.navigate(['/About']);
  }
  onContact() {
    this.router.navigate(['/Contact']);
  }
}



