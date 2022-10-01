import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  createServer = 'No Server Was Created'
  Name = '';
  newServer = 'Test Server';
  serverCreated = false;
  ListServers = ['TS 1' , 'TS 2'];
  static Name: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  onNewServer(){
    this.newServer = this.newServer + ' Server ' + this.Name + ' Is Active '   ;
  }
  onCreateServer(){
    if (this.Name == ''){
      this.createServer = 'nooo'
    }
    
    else{
      this.newServer = this.newServer + ' Server ' + this.Name + ' Is Active '   ;
      this.serverCreated = true;

      this.createServer = 'New Server Is Created with Name ' +this.Name;
      this.ListServers.push(this.newServer);
     
  
    
    
    console.log('hello walad')
    console.log('hello' +'\n' +' walad')


    }
    
    }

  

    

  }


