import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-confirm-token',
  templateUrl: './confirm-token.component.html',
  styleUrls: ['./confirm-token.component.scss']
})
export class ConfirmTokenComponent implements OnInit {
  token:string;
  password:string;
  confirmPassword:string;
  message:string;
  confirmPass:boolean;
  constructor(private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,) { }

  ngOnInit(): void {
  }

  forgotPassword(form:NgForm){
     console.log(form.value)
     this.token=form.value.token;
     this.password=form.value.newPassword;
     this.authService.reset(this.token,this.password).subscribe(res=>{
      console.log(res)
       this.message=res['message'];
       console.log(this.message);
       if(this.message==='Invalid token.'){
        this.toastr.error('Token invaild', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
       } else {
        this.router.navigate(['/loginAdmin']);
        this.toastr.success(' Please Sign', 'Success', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
       
       }
     });
  }

  confirm(){
    if (this.password!=this.confirmPassword){
        this.confirmPass=false;
    } else{
      this.confirmPass=true;
    }
  }

}
