import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxModal } from 'ngx-easy-modal';
import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  modal: any;
  
  paramValue:any;
  destroy = true;
  params:any

  constructor(private __trelloService:TrelloService) { }

  ngOnInit(): void {
    this.params = this.__trelloService.paramsModal;
  }

  close(){
    this.modal.close();
    if(this.destroy){
      this.modal.destroy();
    }
  }
}
