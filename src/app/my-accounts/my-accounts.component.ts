import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css']
})
export class MyAccountsComponent implements OnInit {

   

  accounts: {name:string , status:string}[] = [];
  
  constructor(private accountsService : AccountService){

  }
 
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

 

}
