import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  paramsModal = {};
  currentBoard = 0;
  trello = [
    {
      "id": 1,
      "name": "Todo for today",
      "users": [
        {name: "Edu", image: "https://res.cloudinary.com/codeable/image/upload/v1614550039/trello-avatars/avatar-4_qnho2r.png"},
        {name: "Lolo", image: "https://res.cloudinary.com/codeable/image/upload/v1614550033/trello-avatars/avatar-2_due10r.png"},
        {name: "Lili", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"}
      ],
      "list": [
        {
          title: "ToDo", items: [
            {
              title: "Add social networks",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614554516/trello-avatars/avatar-6_zgwbap.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550033/trello-avatars/avatar-2_due10r.png"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "title description here 2",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Lili", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "title description here 3",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Mike", comment:"Lorem Ipsum simply dummy text"}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Todo for today",
      "users": [
        {name: "Mike", image: "https://res.cloudinary.com/codeable/image/upload/v1614458231/trello-avatars/avatar-1_i7fc6i.png"},
        {name: "Lili", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"}
      ],
      "list": [
        {
          title: "ToDo", items: [
            {
              id: 1,
              title: "Add social networks",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614554516/trello-avatars/avatar-6_zgwbap.png"},
                {name: "Mike", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"},
                {name: "Lolo", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550033/trello-avatars/avatar-2_due10r.png"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Edu", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Juan", comment:"Lorem Ipsum simply dummy text"}
              ]
            }
          ]
        },
        {
          title: "ToDo", items: [
            {
              id: 1,
              title: "Add social networks",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614554516/trello-avatars/avatar-6_zgwbap.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550033/trello-avatars/avatar-2_due10r.png"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Edu", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Juan", comment:"Lorem Ipsum simply dummy text"}
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Todo for today",
      "users": [
        {name: "Bruce", image: "https://res.cloudinary.com/codeable/image/upload/v1614554534/trello-avatars/avatar-10_c6alwa.png"},
        {name: "Mary", image: "https://res.cloudinary.com/codeable/image/upload/v1614554516/trello-avatars/avatar-6_zgwbap.png"}
      ],
      "list": [
        {
          title: "ToDo", items: [
            {
              id: 1,
              title: "Add social networks",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614554516/trello-avatars/avatar-6_zgwbap.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550033/trello-avatars/avatar-2_due10r.png"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Edu", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Juan", comment:"Lorem Ipsum simply dummy text"}
              ]
            }
          ]
        },
        {
          title: "ToDo", items: [
            {
              id: 1,
              title: "Add social networks",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614554516/trello-avatars/avatar-6_zgwbap.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550034/trello-avatars/avatar-3_fwvhhl.png"},
                {name: "Lila", comment:"Lorem Ipsum simply dummy text", image: "https://res.cloudinary.com/codeable/image/upload/v1614550033/trello-avatars/avatar-2_due10r.png"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Edu", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "title description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Juan", comment:"Lorem Ipsum simply dummy text"}
              ]
            }
          ]
        }
      ]
    }

  ]





  constructor( ) {
    let board = localStorage.getItem("currentBoard");
    console.log(board);
    if(board){
      this.currentBoard = +board;
    };
    // this.currentBoard = localStorage.getItem("currenBoard") ? +localStorage.getItem("currenBoard") : 0;
  }
}
