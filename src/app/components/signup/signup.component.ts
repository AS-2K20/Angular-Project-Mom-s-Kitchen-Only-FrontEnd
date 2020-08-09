import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {UserNameService} from 'src/app/services/user-name.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userName_text:any;

  userEmail:String='';
  userPassword:String='';

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar, private uNameService : UserNameService) { }

  openSnackBar() {
    this._snackBar.open('Awesome '+this.userName_text+', Your Account has been Created Successfully !', 'Cool', {
      duration: 2000,
      horizontalPosition:"center",
      verticalPosition: "bottom",
      panelClass:'notif-success'
    });
  }

  onSubmit(){
    console.log( this.userName_text);
    if(this.userName_text==undefined){
      this.userName_text = "Unknown Person";
    }
    const newUserName = this.userName_text;
    this.uNameService.addUserName(newUserName);
  }

}
