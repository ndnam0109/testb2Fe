import { RepCommentService } from './../service/rep-comment.service';
import { UserComment } from './../modell/comment';

import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit, ElementRef, AfterViewInit, Component } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { TokenService } from '../service/token.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RepComment } from '../modell/repComment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {

  listComment:UserComment[];
  data:any[];
  content:string;
  userName:string;
  listRepComment:RepComment[];
  idComment:number;
  hidden:boolean=true;
  realRol: string;

  

  constructor(
    private commentService:CommentService,
    private repCommentService:RepCommentService,
    private tokenService : TokenService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
   this.getComment();
   this.userName = this.tokenService.getUserName();
}

  getComment(){
    this.listComment = new Array();
    this.commentService.getAll().subscribe(res=>{
      console.log(res);
      this.data=res;
      this.data.forEach(resp => {
        let comment = new UserComment();
        comment.idUser=resp['idUser']
        comment.idComment=resp['idComment']
        comment.content=resp['content']
        comment.userName=resp['userName']
        comment.dateCreate=resp['dateTest']
        comment.listRepComment=resp['listRepComment']
        this.listComment.push(comment);
      });
     
    });
   

  }

  submit(form: NgForm){
    if (!this.tokenService.getToken()){
      this.router.navigate(['/loginAdmin']);
      this.toastr.warning('Please Login before comment', 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
    } else {
      var comment = new UserComment();
      comment.content=this.content;
      comment.userName=this.userName;
      this.commentService.save(comment).subscribe(res=>{
        this.getComment();
      });
      form.reset();
    }
   
    
  }

  getIdComment(value){
    this.idComment=value;
    console.log(this.idComment);
    
  }

  change(item){
    item.status='true';
  }
  change1(item){
    item.status='false';
  }

  submitRep(form: NgForm){
   
    var repComment = new RepComment();
    repComment.content=form.value.repComment;
    repComment.userName=this.userName;
    repComment.idComment=this.idComment;
    this.repCommentService.save(repComment).subscribe(res=>{
      this.getComment();
    });
    form.reset();
  }

  // scroll(id) {
  //   console.log( `${id}`);
  //   let el = document.getElementById(id);
  //   el.scrollIntoView({behavior: 'smooth',block: 'center'});
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
  //   const expectedRol = route.data.expectedRol;
  //   const roles = this.tokenService.getAuthorities();
  //   this.realRol = 'user';
  //   roles.forEach(rol => {
  //     if (rol === 'ROLE_ADMIN') {
  //       this.realRol = 'admin';
  //     }
  //   });
  //   if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
  //     this.router.navigate(['/loginAdmin']);
  //     return false;
  //   }
  //   return true;
  // }





    



}
