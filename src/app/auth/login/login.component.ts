import { AuthService } from './../../service/auth.service';
import { TokenService } from './../../service/token.service';
import { Login } from './../../modell/login';
import { NgxSpinnerService } from 'ngx-spinner';

import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  login: Login;
  userName: string;
  password: string;
  passwordConfirm:string;
  roles: string[] = [];
  errMess: string;
  confirmPass:boolean;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    // private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.login = new Login(this.userName, this.password);
    this.authService.login(this.login).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        // this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
        //   timeOut: 3000, positionClass: 'toast-top-center'
        // });
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
        
        setTimeout(() => {
          this.router.navigate(['//testB2/trang-chu']);
        }, 500);
       
      },
      err => {
        this.isLogged = false;
        this.isLoginFail=true;
        this.errMess = err.error.message;
        // this.toastr.error(this.errMsj, 'Fail', {
        //   timeOut: 3000,  positionClass: 'toast-top-center',
        // });
        
      }
    );
  }

  confirm(){
    if (this.password!=this.passwordConfirm){
        this.confirmPass=false;
    } else{
      this.confirmPass=true;
    }
  }





}
