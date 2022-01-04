import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  public users:any = []
  constructor(public server: BackendService) { }

  ngOnInit(): void {
    this.server.getUser().subscribe(data=>{
      this.users = data
    })
  }

}
