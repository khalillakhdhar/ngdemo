import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user=new User();
  constructor()
    {
        console.log("WelcomeComponent constructor");
        this.user.nom="khalil";
    }
  ngOnInit(): void {
      console.log("WelcomeComponent ngOnInit");
      alert("hello "+this.user.nom);
    }




}
