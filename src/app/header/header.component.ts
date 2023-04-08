import { Component } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
user = new User();
constructor() {
  this.user.nom = "John";
  this.user.prenom = "Doe";
  this.user.email = "test@gmail.com";
  this.user.password="123456";
  console.log("utilisateur",this.user);
 }

}
