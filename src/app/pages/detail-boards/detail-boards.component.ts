import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-detail-boards',
  templateUrl: './detail-boards.component.html',
  styleUrls: ['./detail-boards.component.css']
})
export class DetailBoardsComponent implements OnInit {

  board:any= {};

  formUser = new FormGroup({
    name: new FormControl("",[Validators.required,]),
    alias: new FormControl(),
  });

  constructor(private _trelloService:TrelloService, private _routerActive:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._routerActive.snapshot.params.id
    this.board = this._trelloService.trello.find(board => board.id == id)
    console.log(this.board)
  }

}
