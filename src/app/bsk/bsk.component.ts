import { Component, OnInit } from '@angular/core';
import {BskServiceService} from "../bsk-service.service";
import {User} from "../user";

@Component({
  selector: 'app-bsk',
  templateUrl: './bsk.component.html',
  styleUrls: ['./bsk.component.css']
})
export class BskComponent implements OnInit {

  constructor(private bskService: BskServiceService) { }

  ngOnInit(): void {

    let user: User = new User();
    user.email = "aleks@seba.pl";
    user.name = "seba";
    user.gender = "male";
    user.status = "active";


    this.bskService.createUser(user).subscribe(data => {
      console.log(data)
      this.bskService.deleteUser(data.id).subscribe(data => {
        console.log(data)
      })
    });

  }

}
