import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Trello";
  trello: any[] = []

  constructor(private _router: Router, private _trelloService: TrelloService) { }

  ngOnInit(): void {
    this.trello = this._trelloService.trello
  }

}
