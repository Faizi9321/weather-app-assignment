import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { appConfig } from '../../../config'
import { ChartConfiguration, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-capital-weather',
  templateUrl: './capital-weather.component.html',
  styleUrls: ['./capital-weather.component.scss']
})
export class CapitalWeatherComponent implements OnInit{

  capital:any;
  weather:any;
  weatherIcon: string = '';
  fiveDayWeather:any[] = [];
  monthNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  days: any[] = [];
  lineChartData:any;
  minTemp:any[] = [];
  maxTemp:any[] = [];

  constructor(private router: Router, private apiService:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.capital = navigation?.extras.state as { capital: string };
    this.capital = this.capital.capital 
    this.getWeather(this.capital.latlng);
    this.getFiveDayWeather(this.capital.latlng);
  }

  ngOnInit(): void {
  }
  
  getWeather(coords:any){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&units=metric&appid=${appConfig.weatherKey}`
    this.apiService.get(url).then((result:any)=>{
      if(result){
        this.weather = result;
        this.weatherIcon = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
      }      
    })
  }

  getFiveDayWeather(coords:any){
    this.apiService.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&cnt=5&units=metric&appid=${appConfig.weatherKey}`).then((result:any)=>{
      if(result){
        result.list.forEach((element:any)=>{
          let date = new Date(element.dt_txt)
          this.days.push(this.monthNames[date.getDay()])      
          this.minTemp.push(element.main.temp_min)    
          this.maxTemp.push(element.main.temp_max)    
          element.icon = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
        })
        this.fiveDayWeather = result.list;
        //line chart
        this.lineChartData = {
          labels: this.days,
          datasets: [
            {
              data: this.minTemp,
              fill:true,
              tension: 0,
              borderColor: 'rgba(184, 207, 224, 1)',
              backgroundColor: 'rgba(240, 242, 246, 1)',
              pointBorderColor: '#000000',
              pointBackgroundColor: 'white',
            },
            {
              data: this.maxTemp,
              tension: 0.5,
              fill:true,
              borderColor: 'rgba(138, 163, 182, 1)',
              backgroundColor: 'rgba(240, 242, 246, 1)',
              pointBorderColor: '#000000',
              pointBackgroundColor: 'white',
            }
          ],
        };
      }      
    })
  }

  // line chart
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: { grid: { display: false } },
      y: { 
        grid: { display: false }, 
        ticks: { display: false }, 
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: '#213060'
      }
    }
  };
  public lineChartLegend = false;

}
