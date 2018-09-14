import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendService } from '../Services/FriendService';
import { FriendResponse, CommonResponse, User, BillResponse, PayerResponse, SharedWithResponse, SettlementResponse, BillGetResponse, GetSettlementResponse, CreateGroupResponse, TransactionResponse, GroupBalanceDetail, GroupResponse, TransactionGetResponse } from '../Models/Model';
import { UserService } from '../Services/UserService';
import { BillService } from '../Services/BillService';
import { GroupService } from '../Services/GroupService';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-friend-board',
  templateUrl: './friend-board.component.html',
  styleUrls: ['./friend-board.component.css']
})



export class FriendBoardComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;
  @ViewChild('closePayerModal') closePayerModal: ElementRef;

  constructor(private route: ActivatedRoute, private user_service: UserService, private group_service: GroupService,
    private bill_service: BillService, private router: Router, private friend_service: FriendService) { }
  id: number;
  userid: number;
  showPayer: boolean = false;
  paidby: any;
  bills: BillGetResponse[];

  public addBill = new BillResponse();

  public payer = new PayerResponse();
  payers = new Array<PayerResponse>();

  public shareMember = new SharedWithResponse();
  shareMembers = new Array<SharedWithResponse>();

  public settlement = new SettlementResponse();
  settlements = new Array<SettlementResponse>();

  frdSettlement: GetSettlementResponse[];
  balance: number = 0;
  showBalance: number;

  details = new Array<GroupBalanceDetail>();
  detail = new GroupBalanceDetail();

  friendPay: number;
  userPay: number;
  my_date: any;

  public friend = new FriendResponse();
  public user = new User();

  transactions: TransactionGetResponse[];


  ngOnInit() {

    this.paidby = "Select Payer";

    this.id = this.route.snapshot.params['frdid'];
    this.route.parent.params.subscribe(params => {
      this.userid = params['id']
    });
    this.friend_service.getFriendData(this.id).subscribe((data: FriendResponse) => {
      //  console.log(data),
      this.friend = data
    });

    this.user_service.getUserData(this.userid)
      .subscribe((data: User) => this.user = data);

    this.bill_service.getFriendBills(this.userid, this.id).subscribe((data: BillGetResponse[]) => {
      this.bills = data,
      //this.bills = this.bills.sort((a) => (a as any));
        console.log(this.bills)
    });

    this.bill_service.getFriendTransactions(this.userid, this.id)
      .subscribe((data: TransactionGetResponse[]) => {
        this.transactions = data,
          console.log(this.transactions);
      });

    this.bill_service.getFriendSettlements(this.userid, this.id)
      .subscribe((data: GetSettlementResponse[]) => {
        this.frdSettlement = data,
          console.log(this.frdSettlement);
        for (var i = 0; i < this.frdSettlement.length; i++) {

          if (this.userid == this.frdSettlement[i].payer.id) {
            this.detail = new GroupBalanceDetail();
            this.detail.detail = "You owe " + this.frdSettlement[i].payee.name + " ₹" + this.frdSettlement[i].amount;
            if (this.frdSettlement[i].group == null) {
              this.detail.detail = this.detail.detail + " for " + "'" + "Non Group Expense" + "'";
            }
            else {
              this.detail.detail = this.detail.detail + " for " + "'" + this.frdSettlement[i].group.name + "'";
            }
            this.detail.id = 0;
            this.details.push(this.detail);
            this.balance = this.balance - this.frdSettlement[i].amount;

          }
          if (this.userid == this.frdSettlement[i].payee.id) {
            this.detail = new GroupBalanceDetail();
            this.detail.detail = this.frdSettlement[i].payer.name + " owes you ₹" + this.frdSettlement[i].amount;
            if (this.frdSettlement[i].group == null) {
              this.detail.detail = this.detail.detail + " for " + "'" + "Non Group Expense" + "'";
            }
            else {
              this.detail.detail = this.detail.detail + " for " + "'" + this.frdSettlement[i].group.name + "'";
            }
            this.detail.id = 1;
            this.details.push(this.detail);
            this.balance = this.balance + this.frdSettlement[i].amount;
          }
        }
        if (this.balance < 0)
          this.showBalance = 0 - this.balance;
        else
          this.showBalance = this.balance;
        console.log(this.balance);
        console.log(this.details);
      });
  }







  delete() {
    if (confirm("Are you sure you want to remove this friend")) {
      this.group_service.getFriendGroups(this.userid, this.id)
        .subscribe((data: GroupResponse[]) => {
          if (data.length > 0) {
            alert("you this friend in group. so you cannot remove friend");
          }
          else {
            this.friend_service.removeFriend(this.userid, this.id)
              .subscribe((data: CommonResponse) => {
                console.log(data),
                  alert("Delete Successfull"),
                  this.router.navigate(['/Board', this.userid])
              },
                error => alert("cannot delete friend"));
          }
        });
    }

  }
  showpayer() {
    this.paidby = "multiple"
    if (this.showPayer == false)
      this.showPayer = true;
    else
      this.showPayer = false;
    this.payer = new PayerResponse();

  }

  addSinglePayer(id) {
    this.payer = new PayerResponse();
    this.payers = new Array<PayerResponse>();
    this.payer.paid_byId = id;
    this.payer.amount_paid = this.addBill.total_amount;
    this.user_service.getUserData(this.payer.paid_byId).subscribe(
      (data: User) => this.paidby = data.user_name
    );
  }

  AddBillData() {
    if (this.payer.paid_byId == null) {
      alert("Please select payer");
    }
    else {
      this.my_date = new Date().toLocaleString();
      this.addBill.bill_created_at = this.my_date;
      this.addBill.bill_created_byId = this.userid;
      this.addBill.bill_updated_at = this.my_date;
      this.addBill.bill_updated_byId = this.userid;

      console.log(this.friendPay);
      console.log(this.userPay);



      if (this.friendPay != null) {
        this.payer = new PayerResponse();
        this.payer.paid_byId = this.id;
        this.payer.amount_paid = this.friendPay;
        this.payers.push(this.payer);
      }
      if (this.userPay != null) {
        this.payer = new PayerResponse();
        this.payer.paid_byId = this.userid;
        this.payer.amount_paid = this.userPay;
        this.payers.push(this.payer);
      }


      if (this.payers.length == 0) {
        this.payers.push(this.payer);
      }


      var div = Number.parseFloat((this.addBill.total_amount / 2).toFixed(2));
      // div = Math.round(div);

      this.shareMember = new SharedWithResponse();
      this.shareMember.owes_amount = div;
      this.shareMember.shared_withId = this.id;
      this.shareMembers.push(this.shareMember);

      this.shareMember = new SharedWithResponse();
      this.shareMember.owes_amount = div;
      this.shareMember.shared_withId = this.userid;
      this.shareMembers.push(this.shareMember);

      if (this.payers.length == 1) {
        var payee = this.payer.paid_byId;
        for (var i = 0; i < this.shareMembers.length; i++) {
          if (payee != this.shareMembers[i].shared_withId) {
            var payer = this.shareMembers[i].shared_withId;
            var amt = this.shareMembers[i].owes_amount;
            this.settlement = new SettlementResponse();
            this.settlement.payeeId = payee;
            this.settlement.payerId = payer;
            this.settlement.paid_amount = amt;
            this.settlement.groupId = this.id;
            if (this.settlement.paid_amount != 0)
              this.settlements.push(this.settlement);
          }
        }
      }
      else {
        if (this.payers[0].amount_paid > div) {
          this.settlement = new SettlementResponse();
          this.settlement.payeeId = this.payers[0].paid_byId;
          this.settlement.payerId = this.payers[1].paid_byId;
          this.settlement.paid_amount = this.payers[0].amount_paid - div;
          if (this.settlement.paid_amount != 0)
            this.settlements.push(this.settlement);
        }
        else {
          this.settlement = new SettlementResponse();
          this.settlement.payeeId = this.payers[1].paid_byId;
          this.settlement.payerId = this.payers[0].paid_byId;
          this.settlement.paid_amount = this.payers[1].amount_paid - div;
          if (this.settlement.paid_amount != 0)
            this.settlements.push(this.settlement);
        }
      }


      this.addBill.payers = this.payers;
      this.addBill.sharedwiths = this.shareMembers;
      this.addBill.settlements = this.settlements;



      console.log(this.addBill);

      this.bill_service.addNewBill(this.addBill)
        .subscribe((data: CommonResponse) => {
          if (data.status == true) {
            alert("Bill Added Successfully")
          }
          else ("Failed to add the bill")
        });
      this.closeModal.nativeElement.click();
      this.closePayerModal.nativeElement.click();

    }
    
  }
}
