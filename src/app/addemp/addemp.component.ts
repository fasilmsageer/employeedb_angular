import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  name=""
  designation=""
  salary=""
  companyname=""
  mobnumber=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"name":this.name,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobnumber":this.mobnumber,"username":this.username,
    "password":this.password}
    console.log(data)
    
    this.api.addemployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.name=""
          this.designation=""
          this.salary=""
          this.mobnumber=""
          this.companyname=""
          this.username=""
          this.password=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }



}
