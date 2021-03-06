import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxModal } from 'ngx-easy-modal';
import { TrelloService } from 'src/app/services/trello.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  modal: any;
  board:any= {};
  paramValue:any;
  destroy = true;

  formCard:any;
  formComment: any;
  params:any;
  imageDefault:String = "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png";

  formUser = new FormGroup({
    email: new FormControl("",[Validators.required]),
    image: new FormControl(this.imageDefault)

  });

  constructor(private __trelloService:TrelloService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.board = this.__trelloService.trello.find((board) => board.id == this.__trelloService.currentBoard)
  }

  saveUser(){
    if(this.formUser.valid){
      this.board.users.push(this.formUser.value);
      this.formUser.reset();
      this.close();
    } else{
      alert("This can't be blanck");
    }
    console.log(this.formUser.value)
  }

  close(){
    this.modal.close();
    if(this.destroy){
      this.modal.destroy();
    }
  }
}
