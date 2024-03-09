import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next7-days',
  templateUrl: './next7-days.component.html',
  styleUrls: ['./next7-days.component.css']
})
export class Next7DaysComponent {

  constructor(private router: Router){}

  back(){
  this.router.navigateByUrl('');
  }

}
