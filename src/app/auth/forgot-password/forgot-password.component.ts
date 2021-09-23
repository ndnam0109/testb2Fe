import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  errMess: string;
  email:string;
  constructor(private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,) { }

  ngOnInit(
    ): void {
  }

  forgotPassword(form:NgForm){
     
      this.email=form.value.email;
      this.spinner.show();
      this.authService.forgot(this.email).subscribe(
        data => {
          this.spinner.hide();
         
          // setTimeout(() => {
          //   this.spinner.hide();
          // }, 1500);
          this.router.navigate(['/confirm-token']);
        },
        err => {
          this.spinner.hide();
          this.errMess = err.error.message;
          this.toastr.error('Not found email', 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          console.log(err.error.message);
        }
      );
    } 

  

}
