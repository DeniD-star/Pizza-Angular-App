import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private rgauth:AngularFireAuth) { }


  register(email:string,password:string)
  {
    console.log("i'm here")
    this.rgauth.createUserWithEmailAndPassword(email,password).then((userCredential) => {

      console.log('User registered successfully!', userCredential);
    })
    .catch((error) => {
      console.log("i'm not here")
      // User registration failed, handle the error here
      console.error('Error during user registration:', error);
    })

  }

  ngOnInit(){
    this.register

 }
}
