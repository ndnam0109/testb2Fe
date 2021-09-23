import { AuthService } from './../../service/auth.service';
import { TokenService } from './../../service/token.service';
import { User } from './../../modell/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  userName: string;
  password: string;
  email:string;

  errMess: string;
  isLogged = false;
  passwordConfirm:string;
  confirmPass:boolean=null;
  constructor( private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onRegister(): void {
    this.user = new User();
    this.user.userName=this.userName;
    this.user.password=this.password;
    this.user.email=this.email;
    if(this.confirmPass==true){
      this.authService.addNew(this.user).subscribe(
        data => {
          this.toastr.success('Please SignIn','Success', {
            timeOut: 2500, positionClass: 'toast-top-center'
          });
  
          this.router.navigate(['/loginAdmin']);
        },
        err => {
          this.errMess = err.error.mensaje;
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          console.log(err.error.message);
        }
      );
    } 
    
  }


  confirm(){
    if (this.password!=this.passwordConfirm){
        this.confirmPass=false;
    } else{
      this.confirmPass=true;
    }
  }

}
