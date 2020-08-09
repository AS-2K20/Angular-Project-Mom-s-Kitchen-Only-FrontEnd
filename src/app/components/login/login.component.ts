import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

 
import {UserNameService} from 'src/app/services/user-name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_Name : any;

  userEmail:String='';
  userPassword:String='';

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar, private uNameService:UserNameService) {
    this.user_Name = this.uNameService.getUserName();
    
   }

  ngOnInit():void{

  }

  openSnackBar() {
    this._snackBar.open(this.user_Name+', You are IN !', 'Cool', {
      duration: 2000,
      horizontalPosition:"center",
      verticalPosition: "bottom",
      panelClass:'notif-success'
    });
  }


}
