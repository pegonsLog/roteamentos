import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/_models/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = new FormControl('564');
  password = new FormControl('564');
  isAuth: boolean = false;

  userAuth: User = {
    user: '',
    name: '',
    password: '',
    role: '',
  };

  users: User[] = [];
  subscription = new Subscription();

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {
    this.subscription = this.loginService
      .list()
      .subscribe((users: User[]) => (this.users = users));
  }

  onEnterpriseList() {
    // for (let user of this.users) {
    //   if (
    //     user.user === this.user.value &&
    //     user.password === this.password.value
    //   ) {
    //     this.userAuth = user;
    //     this.isAuth = true;
    //   }
    // }
    // if (this.isAuth) {
      this.router.navigate(['home/main']
      // , {
      //   queryParams: {
      //     user: this.userAuth.user,
      //     password: this.userAuth.password,
      //     role: this.userAuth.role,
      //     name: this.userAuth.name,
      //   },
      // }
      );
    // } else {
    //   this.onError();
    // }
  }

  onError() {
    this.snackBar.open('Usuário ou senha inválidos!', 'X', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
