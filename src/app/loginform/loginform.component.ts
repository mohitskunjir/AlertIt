import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  emailValidL: string;
  passwd1ValidL: string;

  constructor(private obj: Router) { }

  ngOnInit() { }

  onClickSubmit(data) {

          if (data.emailIdL === '') {
               this.emailValidL = 'Please enter Email Id';
               console.log('Please enter Email Id');
          } else if (data.emailIdL.indexOf('@', 0) < 0) {
               this.emailValidL = 'Invalid Email id';
               console.log('Invalid Mail id');
          } else if (data.emailIdL.indexOf('.', 0) < 0) {
               this.emailValidL = 'Invalid Email id';
               console.log('Invalid Mail id');
          } else if (data.passwdL === '') {
               this.passwd1ValidL = 'Please enter Password';
               console.log('Please enter Password');
          } else {
               alert('Welcome: ' + data.emailIdL);
               this.obj.navigate(['/hospital']);
          }
     }
     clear() {
          console.log('clear');
     }

     clearEmail(data) {
          if (data === '') {
               this.emailValidL = 'Please enter Email Id';
          } else if (data.indexOf('@', 0) < 0) {
               this.emailValidL = 'Invalid Email id';
          } else if (data.indexOf('.', 0) < 0) {
               this.emailValidL = 'Invalid Email id';
          } else {
               this.emailValidL = '';
          }
     }
}
