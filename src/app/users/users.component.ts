import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users: User[] = [];
  Flag: boolean = true;
  ngOnInit(): void {
    this.users = [
      {
        Name:'Mahe',
        Age:23
      },
      {
        Name:'Vam',
        Age:24
      },
      {
        Name:'Hush',
        Age:24
      },
      {
        Name:'Chakri',
        Age:24
      },
      {
        Name:'Siddu',
        Age:24
      }
    ]
  }


}
