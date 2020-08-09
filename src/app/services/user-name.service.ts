import { Injectable } from '@angular/core';
import {uName} from 'src/app/model/userName'; 

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  userName : uName;

  constructor() { }

  addUserName(userName){
    this.userName=userName;
  }

  getUserName(): uName{
    return this.userName;
  }
}
