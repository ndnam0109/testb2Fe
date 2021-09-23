import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dapan',
  templateUrl: './dapan.component.html',
  styleUrls: ['./dapan.component.scss']
})
export class DapanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listQuestion=[ 
    {value:1,status:'false'},
    {value:2,status:'false'},
    {value:3,status:'false'},
    {value:4,status:'false'},
    {value:5,status:'false'},
    {value:6,status:'false'},
    {value:7,status:'false'},
    {value:8,status:'false'},
    {value:9,status:'false'},
    {value:10,status:'false'},
    {value:11,status:'false'},
    {value:12,status:'false'},
    {value:13,status:'false'},
    {value:14,status:'false'},
    {value:15,status:'false'},
    {value:16,status:'false'},
    {value:17,status:'false'},
    {value:18,status:'false'},
    {value:19,status:'false'},
    {value:20,status:'false'},
    ];
  check:string='false';
  questionNumber:number=1;

  changeBgr(item){
    this.questionNumber=item.value;

  }

}
