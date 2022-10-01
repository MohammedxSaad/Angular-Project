import { Component , OnInit} from '@angular/core';
// import { serverService } from './server.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myimage:string = "src/app/image/img.jpg" ;
  servers =[{
    name: 'Testserver',
    capacity : 10,
    id : this.generateId()
  }

   
  ]
 

  constructor() {

   }
   
   ngOnInit(): void {
     
   }
   onAddServer(name :string){
    this.servers.push({
      name : name,
      capacity : 50,
      id: this.generateId()

    })
    
  }
  private generateId(){
    return Math.round(Math.random()*10000)
  }
  // onSave(){
  //   this.serverService.storeServers(this.servers).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //     )
    
  // }
  // onGet(){  
  //   this.serverService.getServers().subscribe(
  //     (response) => console.log(response)
  //     ,
  //     (error) => console.log(error)

  //   )

  // }





}
