import { UserService } from './../../service/user.service';
import { TokenService } from './../../service/token.service';
import { HistoryTest } from './../../modell/historyTest';
import { HistoryTestService } from './../../service/history-test.service';
import { Question } from './../../modell/cauhoi';
import { QuestionService } from './../../service/question.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modell/user';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-baithi',
  templateUrl: './baithi.component.html',
  styleUrls: ['./baithi.component.scss']
})
export class BaithiComponent implements OnInit {
 listQuestion : Question[];
 listUserAnswer : any[];
 data:any[];
check:string='false';
questionNumber:number=1;
num:number=1;
id:number;
trueAnswer:number=0;
failAnswer:number;
ketthuc:boolean=false;
ketqua:boolean=false;
userName:string;
user:User;
thumbnailQuestion:string='https://firebasestorage.googleapis.com/v0/b/ndnam0109-a9555.appspot.com/o/testB2%2F2.PNG?alt=media&token=b622df71-1277-4e0b-8d59-4989dfdc3f8b';
  constructor(private questionService:QuestionService,
              private historyTestService:HistoryTestService,
              private tokenService:TokenService,
              private userService:UserService) { }

  ngOnInit(): void {
    this.getList();
    this.userName=this.tokenService.getUserName();
    
    
  }

  changeCheck(item){
    this.questionNumber=item.stt;
    item.status='true';
    
  }

  changeBgr(item){
    console.log(item);
    this.questionNumber=item.stt;
    this.thumbnailQuestion=item.thumbnail;

  }

  getList(){
    this.listQuestion= new Array();
    this.questionService.getAll().subscribe(res=>{
      console.log(res);
      this.data=res;
      this.data.forEach(ques => {
        let question = new Question();
        question.stt=this.num;
        this.num++;
        question.idQuestion=ques['idQuestion']
        question.idCategory=ques['idQuestion']
        question.answer=ques['answer']
        question.thumbnail=ques['thumbnail']
        question.thumbnailAnswer=ques['thumbnailDapAn']
        this.listQuestion.push(question);

      });
     
    })
  }

  submit(form:NgForm){
    // console.log(form.value);
    this.listUserAnswer = new Array();
    console.log(form.value)
    
    this.listQuestion[0].userAnswer=form.value.answer1;
    this.listQuestion[1].userAnswer=form.value.answer2;
    this.listQuestion[2].userAnswer=form.value.answer3;
    this.listQuestion[3].userAnswer=form.value.answer4;
    this.listQuestion[4].userAnswer=form.value.answer5;
    this.listQuestion[5].userAnswer=form.value.answer6;
    this.listQuestion[6].userAnswer=form.value.answer7;
    this.listQuestion[7].userAnswer=form.value.answer8;
    this.listQuestion[8].userAnswer=form.value.answer9;
    this.listQuestion[9].userAnswer=form.value.answer10;
    this.listQuestion[10].userAnswer=form.value.answer11;
    this.listQuestion[11].userAnswer=form.value.answer12;
    this.listQuestion[12].userAnswer=form.value.answer13;
    this.listQuestion[13].userAnswer=form.value.answer14;
    this.listQuestion[14].userAnswer=form.value.answer15;
    this.listQuestion[15].userAnswer=form.value.answer16;
    this.listQuestion[16].userAnswer=form.value.answer17;
    this.listQuestion[17].userAnswer=form.value.answer18;
    this.listQuestion[18].userAnswer=form.value.answer19;
    this.listQuestion[19].userAnswer=form.value.answer20;
    this.listQuestion[20].userAnswer=form.value.answer21;
    this.listQuestion[21].userAnswer=form.value.answer22;
    this.listQuestion[22].userAnswer=form.value.answer23;
    this.listQuestion[23].userAnswer=form.value.answer24;
    this.listQuestion[24].userAnswer=form.value.answer25;
    this.listQuestion[25].userAnswer=form.value.answer26;
    this.listQuestion[26].userAnswer=form.value.answer27;
    this.listQuestion[27].userAnswer=form.value.answer28;
    this.listQuestion[28].userAnswer=form.value.answer29;
    this.listQuestion[29].userAnswer=form.value.answer30;
    this.listQuestion[30].userAnswer=form.value.answer31;
    this.listQuestion[31].userAnswer=form.value.answer32;
    this.listQuestion[32].userAnswer=form.value.answer33;
    this.listQuestion[33].userAnswer=form.value.answer34;
    this.listQuestion[34].userAnswer=form.value.answer35;
   
    
    this.listQuestion.forEach(element => {
      if(element.userAnswer==element.answer){
        this.trueAnswer++;
      }
      
    });
    if(this.trueAnswer>32){
      this.ketqua=true;
    }
    let historySave = new HistoryTest();
    // historySave.dateTest= new Date();
    historySave.soCauDung=this.trueAnswer;
    historySave.status=this.ketqua;
    historySave.userName=this.userName;
    // console.log(historySave.dateTest);
    this.historyTestService.save(historySave).subscribe(res=>{
    });
    
    this.failAnswer=35-this.trueAnswer;
    console.log(this.trueAnswer);
  }

  dapan(){
    this.ketthuc=true;
    console.log(this.listUserAnswer);
  }

  scroll(id) {
    console.log( `${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth',block: 'center'});
  }

  changeStatus( item,e) {
    item.status = e.target.checked;
    console.log(item.status)

    }


    


 

}
