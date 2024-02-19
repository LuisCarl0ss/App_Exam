import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  public login(){
    this.router.navigate(["home"]);
  }

  public registro(){
    this.router.navigate(["registro"])
  }
}
