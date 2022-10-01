import { Component,  Input, OnInit   } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[]
})
export class AccountComponent implements OnInit {

  constructor(private accountsService: AccountService) { }

  ngOnInit(): void {
  }
  @Input()
  account!: { name: string; status: string; };
  @Input() id!: number;


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status)

    console.log('A server status changed, new status: ' + status);
  }

}
