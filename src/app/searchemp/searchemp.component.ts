import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemp',
  templateUrl: './searchemp.component.html',
  styleUrls: ['./searchemp.component.css']
})
export class SearchempComponent {

  constructor(private api:ApiService){}

  empcode=""
  searchdata:any=[]

  readValue=()=>{
    let data ={"empcode":this.empcode}
    console.log(data)

    this.api.searchemployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid employee code")
        }else{
          this.searchdata = response;
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteemployee(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("deleted successfully")
        }else{
          alert("unsuccessful deletion")
        }
      }
      )
      
    
        
    }
  

}
