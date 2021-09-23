import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userName:string;
  constructor(private tokenService : TokenService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userName=this.tokenService.getUserName();
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
      this.router.navigate(['//testB2/trang-chu']);
    }, 1000);
    
  }


}
