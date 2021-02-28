import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxModalService } from 'ngx-easy-modal';
import { TaskBoardComponent } from 'src/app/components/task-board/task-board.component';
import { TrelloService } from 'src/app/services/trello.service';


@Component({
  selector: 'app-detail-boards',
  templateUrl: './detail-boards.component.html',
  styleUrls: ['./detail-boards.component.css']
})
export class DetailBoardsComponent implements OnInit {

  board:any= {};

  formUser = new FormGroup({
    email: new FormControl("",[Validators.required]),
  });

  constructor(private _trelloService:TrelloService, private _routerActive:ActivatedRoute, private modalService: NgxModalService) { }

  ngOnInit(): void {
    let id = this._routerActive.snapshot.params.id
    this.board = this._trelloService.trello.find(board => board.id == id)
    console.log(this.board)
  }

  saveUser(){
    if(this.formUser.valid){
      this.board.users.push(this.formUser.value);
      this.formUser.reset();
    } else{
      alert("This can't be blanck");
    }
  }

  open(item:any){
    const params = item;
    this._trelloService.paramsModal = params;
    this.modalService.create(TaskBoardComponent, params).then((modal: any) => {
      modal.open();
    });

  }
}
