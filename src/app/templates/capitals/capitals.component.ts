import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { appConfig } from '../../../config'

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.scss']
})
export class CapitalsComponent implements OnInit {

  capitals:any[] = [];

  constructor(private apiService:ApiService){
    this.getCapitals();
  }

  ngOnInit(): void {
  }

  getCapitals(){
    let url = 'https://restcountries.com/v3.1/region/europe';
    this.apiService.get(url).then((result:any)=>{
      if(result){        
        this.capitals = result;
      }
    })
  }
}
