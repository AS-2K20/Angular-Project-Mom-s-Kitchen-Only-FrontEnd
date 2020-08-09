import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {UserNameService} from 'src/app/services/user-name.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedback:String='';
  user_Name : any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar, private uNameService:UserNameService) {
    this.user_Name = this.uNameService.getUserName();
   }

  openSnackBar() {
    this._snackBar.open(' I will have a Look into it, '+this.user_Name, 'Cool', {
      duration: 2000,
      horizontalPosition:"center",
      verticalPosition: "bottom",
      panelClass:'notif-success'
    });
  }

}
