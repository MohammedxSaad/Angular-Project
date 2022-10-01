import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-inside-ser',
  templateUrl: './inside-ser.component.html',
  styleUrls: ['./inside-ser.component.css']
})
export class InsideSerComponent implements OnInit {
  onlyOdd = false;
  odd = [1 ,3 ,5 ];
  even = [2 ,4 ,6 ];


  
  constructor() { }

  ngOnInit(): void {
    
  }
  makeOdd(){
    this.onlyOdd  = true;

  }

 
}
