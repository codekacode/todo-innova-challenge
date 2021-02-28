import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  paramsModal = {};
  trello = [
    {
      "id": 1,
      "name": "Todo for today",
      "users": [
        {name: "Mike", image: "https://res.cloudinary.com/codeable/image/upload/v1614458231/trello-avatars/avatar-1_i7fc6i.png"},
        {name: "Lili", image: "https://res.cloudinary.com/codeable/image/upload/v1614458231/trello-avatars/avatar-1_i7fc6i.png"}
      ],
      "list": [
        {
          type: "ToDo", items: [
            {
              title: "Add social networks",
              description: "Type description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Ed", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "Type description here 2",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Ed", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "Type description here 3",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Ed", comment:"Lorem Ipsum simply dummy text"}
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
        {name: "Lili", image: "https://res.cloudinary.com/codeable/image/upload/v1614458231/trello-avatars/avatar-1_i7fc6i.png"}
      ],
      "list": [
        {
          type: "ToDo", items: [
            {
              id: 1,
              title: "Add social networks",
              description: "Type description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Ed", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "What are you lookin for",
              description: "Type description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Ed", comment:"Lorem Ipsum simply dummy text"}
              ]
            },
            {
              title: "You still here, leave!!",
              description: "Type description here",
              labels: ["Home", "Hacer", "Now"],
              comments:[
                {name: "Ed", comment:"Lorem Ipsum simply dummy text"}
              ]
            }
          ]
        }
      ]
    }

  ]





  constructor() { }
}
