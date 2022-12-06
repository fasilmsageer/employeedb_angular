import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent {
  constructor(private api:ApiService){

    api.fetchemployee().subscribe(
  
      (response)=>{
        this.data=response;
      }
    )
  }
  
  data:any=[]

}
