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

  formCard:any;
  params:any;

  constructor(private __trelloService:TrelloService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.params = this.__trelloService.paramsModal;

    this.formCard = this.formBuilder.group({
      'title':[this.params.title ,Validators.required],
      'description':[this.params.description ,Validators.required]
    })
  }

  close(){
    this.modal.close();
    if(this.destroy){
      this.modal.destroy();
    }
  }

  saveTask(){
    let {title, description} = this.formCard.value;
    this.params.title = title;
    this.params.description = description;
  }
}
