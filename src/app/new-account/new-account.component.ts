import { Component,  OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[]
})
export class NewAccountComponent implements OnInit {

  constructor(private accountsService:AccountService) {

   }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName ,accountStatus);

   
    console.log('A server status changed, new status: ' + accountStatus);
  } 

}
