import { CommentService } from './../service/comment.service';
import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogged = false;
  isAdmin=false;
  userName:string;
  roles: string[];
  constructor(private tokenService : TokenService,
    private spinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.userName=this.tokenService.getUserName();
    } else {
      this.isLogged = false;
    }

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  redirect(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    setTimeout(() => {
      this.router.navigate(['//admin']);
    }, 1000);
    
  }


}
