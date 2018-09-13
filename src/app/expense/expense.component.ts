import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/UserService';
import { BillService } from '../Services/BillService';
import { TransactionGetResponse, BillGetResponse, GetSettlementResponse } from '../Models/Model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private user_service: UserService, private bill_service: BillService) { }
  userid: number;
  transactions: TransactionGetResponse[];
  bills: BillGetResponse[];
  allUserSettlement: GetSettlementResponse[];
  total: number = 0;
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.userid = params['id']
    });
    this.bill_service.getUserExpenseTransaction(this.userid)
      .subscribe((data: TransactionGetResponse[]) => this.transactions = data);

    this.bill_service.getUserBills(this.userid)
      .subscribe((data: BillGetResponse[]) => this.bills = data);

    this.bill_service.getUserSettlements(this.userid)
      .subscribe((data: GetSettlementResponse[]) => {
        this.allUserSettlement = data;
        for (var i = 0; i < this.allUserSettlement.length; i++) {
          if (this.allUserSettlement[i].payee.id == this.userid) {
            this.total = this.total + this.allUserSettlement[i].amount;
          }
          else if (this.allUserSettlement[i].payer.id == this.userid) {
            this.total = this.total - this.allUserSettlement[i].amount;
          }
        }
        console.log(this.total);
      });
  }

}
