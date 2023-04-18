import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { User } from '../_shared/models/User';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: string = '';
  password: string = '';
  userAuth: User = {
    id: '',
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

  drh(drh: string) {
    this.query(drh);
  }


  query(type: string) {
    for (let usr of this.users) {
      if (usr.user === this.user && usr.password === this.password) {
        this.userAuth = usr;
      }
    }
    if (this.userAuth && this.userAuth.role === 'user') {
      this.router.navigate([`/${type}/user`], {
        queryParams: {
          name: this.userAuth.name,
          user: this.userAuth.user,
          role: this.userAuth.role,
        },
      });
    }
    if (this.userAuth && this.userAuth.role === 'adm') {
      this.router.navigate(['/administrations'], {
        queryParams: {
          name: this.userAuth.name,
          user: this.userAuth.user,
          role: this.userAuth.role,
        },
      });
    }
    if (this.user === '' || this.password === '') {
      alert('Usuário e/ou senha inválido(s)!');
      this.router.navigate(['']);
    }
  }

  onError() {
    this.snackBar.open('Usuário ou senha inválidos!', 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}