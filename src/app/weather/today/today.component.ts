import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  dataWeather:any;
  todayDate: any;
  latitude: any;
  longitude: any;
  countryCity: any;
  todayTomorrow: any = [];
  currentButton: Boolean = true; 
  startTime!: number;
  endTime!: number;

  constructor(private weatherServ: WeatherService, 
              private router: Router,
              private spinner: NgxSpinnerService){}

  ngOnInit(): void{

    if(!navigator.geolocation){
      console.log("Location is not support")
    }

    this.openSpinner();
    navigator.geolocation.getCurrentPosition((position) =>{
      // console.log(`lat:${position.coords.latitude}, lon: ${position.coords.longitude}`);
       this.latitude = position.coords.latitude;
       this.longitude = position.coords.longitude;
       this.realtimeWeather();
       this.todayWeather();       
    });

  }

  realtimeWeather(){
    this.weatherServ.getWeatherRealtime(this.latitude, this.longitude).subscribe({
      next:(data:any) =>{
        if(data){
          this.closeSpinner()
        }
         this.dataWeather = data.data.values; 
         this.todayDate =  new Date(data.data.time).toDateString().split(' ');
      }
    })
  }

  todayWeather(){
    let date = new Date().setHours(0);
    date = new Date(date).setMinutes(0);
    this.startTime = new Date(date).setSeconds(0);
    this.endTime = new Date(this.startTime).setHours(23);

    // console.log("Date:", this.endTime)
    this.weatherServ.getTodayWeather(this.latitude, this.longitude, this.startTime, this.endTime).subscribe({
      next: (data:any) =>{
         let dataCurrent = data.data.timelines[0].intervals;
         let startTime = data.data.timelines[0].startTime;
        console.log("data1:", data.data.timelines[0].startTime);
        this.todayTomorrow.push(dataCurrent.find((item:any) => {
          let value1 = new Date(item.startTime).getHours();
          let value2 = new Date(startTime).setHours(10);
         return value1 === new Date(value2).getHours();
         }));
          this.todayTomorrow.push(dataCurrent.find((item:any) => {
            let value1 = new Date(item.startTime).getHours();
            let value2 = new Date(startTime).setHours(12);
           return value1 === new Date(value2).getHours();
           }))
           this.todayTomorrow.push(dataCurrent.find((item:any) => {
            let value1 = new Date(item.startTime).getHours();
            let value2 = new Date(startTime).setHours(14);
           return value1 === new Date(value2).getHours();
           }))
           this.todayTomorrow.push(dataCurrent.find((item:any) => {
            let value1 = new Date(item.startTime).getHours();
            let value2 = new Date(startTime).setHours(16);
           return value1 === new Date(value2).getHours();
           }))
           this.todayTomorrow.push(dataCurrent.find((item:any) => {
            let value1 = new Date(item.startTime).getHours();
            let value2 = new Date(startTime).setHours(18);
           return value1 === new Date(value2).getHours();
           }))
           this.todayTomorrow.push(dataCurrent.find((item:any) => {
            let value1 = new Date(item.startTime).getHours();
            let value2 = new Date(startTime).setHours(20);
           return value1 === new Date(value2).getHours();
           }))
        console.log("today:", this.todayTomorrow);
      
    }
     })
  }

  openSpinner(){
    this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 5000);
  }

  closeSpinner(){
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  nextDaysPage(){
    this.router.navigateByUrl("/next7Day");
  }

  today(){
    this.currentButton = true;
  }

  tomorrow(){
    console.log("Tomorrow:", this.currentButton)
   this.currentButton = false;
   console.log("Tomorrow1:", this.currentButton)
  }

  getTemperature(temperature: number): number{
    console.log("temperature:", temperature)
   return Math.floor(temperature);
  }

}
