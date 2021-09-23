import { HistoryTest } from './../modell/historyTest';
import { HistoryTestService } from './../service/history-test.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from '../service/token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lichsu',
  templateUrl: './lichsu.component.html',
  styleUrls: ['./lichsu.component.scss']
})
export class LichsuComponent implements OnInit {
  valueCheckbox:any;
  date:Date=new Date;
  userName:string;
  listHistory:HistoryTest[];
  data:any[];
  soLanThi:number;
  thiDat:number=0;
  thiTruot:number=0;
 

  constructor( private tokenService : TokenService,
    private route: ActivatedRoute,
    private historyTestService:HistoryTestService) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('userName');
    this.getList();
  }
submit(form:NgForm){
  console.log(form);
  console.log(form.value);
}

  getList(){
    this.listHistory=new Array();
    this.historyTestService.getAll(this.userName).subscribe(res=>{
      this.data=res;
      let i:number=1;
      this.data.forEach(element => {
        let history = new HistoryTest();
        history.stt=i;
        i++;
        history.soCauDung=element['soCauDung'];
        history.dateTest=element['dateTest'];
        history.status=element['status'];
        if (history.status===true){this.thiDat++}
        else {this.thiTruot++}
        this.listHistory.push(history);
        
      });
      console.log(this.listHistory);
      this.soLanThi=this.listHistory.length;
      

    })

  }

}
