import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  modal: any;
  board:any= {};
  paramValue:any;
  destroy = true;

  params:any;

  formTodo = new FormGroup({
    title: new FormControl("",[Validators.required]),
  });

  constructor(private __trelloService:TrelloService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.board = this.__trelloService.trello.find((board) => board.id == this.__trelloService.currentBoard)
  }

  saveTodo(){
    if(this.formTodo.valid){
      this.board.list.push(this.formTodo.value);
      this.formTodo.reset();
      this.close();
    } else{
      alert("This can't be blanck");
    }
  }

  close(){
    this.modal.close();
    if(this.destroy){
      this.modal.destroy();
    }
  }
}

