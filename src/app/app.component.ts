import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Boards';

  trello = [
    {
      id:1,
      name:"Titulo 1",
      users: [
        {name:"codeka", alias:"CA"},
        {name:"juanito", alias:"JU"}
      ],
    },
    {
      id:2,
      name:"Titulo 2",
      users: [
        {name:"juanito", alias:"JU"}
      ],
    }
  ]

  ngOnInit(){
    this.title = "Hola"
  }
}

