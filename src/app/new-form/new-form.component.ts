import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { FormsService } from './forms.service';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
 firstname='';
 lastname= '';
  newsemail='';
  newsid=-1;
  answer = '';
  errmsg1= '';
  errmsg2='';
  errmsg3='';
  errmsg4='';
  ti= [{userId: 0, id:0,title:'',body:''}]
  
  


  forms=[{ idd :1111 ,firstnamee:'Mohammed ',lastnamee : 'Saad', emaill:'Mo.saad@gmail.com' }];

  servers =[{
    name: 'Testserver',
    capacity : 10,
    id : this.generateId()
    
  }

   
  ]
  ID!: number;
  constructor(private formService:FormsService, private ttp:HttpClient) { 

  }
  onSave(){
    this.formService.storeForms(this.forms)
    .subscribe((Response) => console.log(Response),(error) => console.log(error))
  }
   onGet(){
    this.formService.getForms().subscribe(data=> this.ti =data)
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

  onGenerateId(){
    this.ID = Math.round(Math.random()*10000);
    this.newsid = this.ID;

  }
  onSubmit(){
    if(this.firstname.length===0 ){
      this.errmsg1 = 'Please Enter a Valid Username'      
      console.log('Empty Name')
    }
    else{
      this.errmsg1=''
    }
    if(this.lastname.length===0 ){
      this.errmsg1 = 'Please Enter a Valid Username'      
      console.log('Empty  Name')
    }
    else{
      this.errmsg1=''
    }
    if( this.newsid===-1 ){
      this.errmsg2= 'Please Get your Unique Id'
      console.log('Empty ID')
    }
    else{
      this.errmsg2=''
    }
    if( this.newsemail.length===0 ){
      this.errmsg3 = 'Please Enter a Valid Email';
      console.log('Empty Email')

    }
    else{
      this.errmsg3=''
    }

    if( this.answer.length ===0){
      this.errmsg4 ='Please Enter a Valid Answer'
      console.log('Empty Answer')
    }
    else{
      this.errmsg4=''
    }

    if (this.errmsg1==='' && this.errmsg2==='' && this.errmsg3==='' && this.errmsg4===''  ) {
      this.forms.push({ 
        idd: this.ID,
        firstnamee: this.firstname,
        lastnamee: this.lastname,
        emaill:this.newsemail });
  
        console.log({ 
          id: this.ID,
          name: this.firstname + this.lastname,
          email:this.newsemail })

          this.errmsg1=''
          this.errmsg2=''
          this.errmsg3=''
          this.errmsg4='';
          this.newsid = -1;
          this.answer=''
          this.newsemail= '';
          this.firstname = '';
          this.lastname = '',
          this.ID= -1;
    }


    
  }



}
function If(arg0: boolean) {
  throw new Error('Function not implemented.');
}

