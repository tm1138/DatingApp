import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  model: any = {};

  ngOnInit(): void {
  }

  login(): void{
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log('failed to login');
    });
  }

  loggedIn(): boolean{
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void{
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
