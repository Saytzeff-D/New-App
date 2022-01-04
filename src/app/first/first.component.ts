import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public server: BackendService, public router: Router) { }

  public userInfo = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNum:  new FormControl(''),
    pword: new FormControl('')
  })
  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.userInfo.value)
    this.server.postObj(this.userInfo.value).subscribe(response=>{
      console.log(response)
    })
  }
  viewUsers(){
    this.router.navigate(['allUsers'])
  }

}
