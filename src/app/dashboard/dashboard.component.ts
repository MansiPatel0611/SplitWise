import { Component, OnInit } from '@angular/core';
import { FriendResponse, User, GetSettlementResponse, CreateGroupResponse, TransactionResponse, Detail, BillResponse, PayerResponse, SharedWithResponse, SettlementResponse, settle } from '../Models/Model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/UserService';
import { GroupService } from '../Services/GroupService';
import { BillService } from '../Services/BillService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private user_service: UserService,
    private bill_service: BillService, private group_service: GroupService) { }


  public user = new User();

  friends: FriendResponse[];

  billShareWith = new Array<Detail>();
  public billsharewith = new Detail();

  id: number;
  showPayer: boolean = false;

  paidby: any;

  friendSettlement: GetSettlementResponse[];

  public addBill = new BillResponse();

  public payer = new PayerResponse();
  payers = new Array<PayerResponse>();

  public shareMember = new SharedWithResponse();
  shareMembers = new Array<SharedWithResponse>();

  public settlement = new SettlementResponse();
  settlements = new Array<SettlementResponse>();

  public sett = new settle();
  //setts = new Array<settle>();

  setPayers = new Array<settle>();
  setShares = new Array<settle>();

  Pay_to: any = "Select";
  Pay_to_Id: number;
  Pay_in: number;
  setAmong: any = "Non Group";
  my_date: any;
  //isSett: GetSettlementResponse[];
  showSettle: boolean = false;
  showInfo: boolean = true;

  settleUp = new TransactionResponse();

  settleAmt: any = 0;
  groups: CreateGroupResponse[];

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.id = params['id']
    });

    //this.id = this.route.snapshot.params['id'];
    this.user_service.getFriends(this.id).subscribe
      ((data: FriendResponse[]) => {
        this.friends = data
        //  console.log(data),
        // console.log(this.friends)
      });
    this.user_service.getUserData(this.id)
      .subscribe((data: User) => {
        this.user = data,
          this.billsharewith = new Detail();
        this.billsharewith.id = this.user.userid;
        this.billsharewith.name = this.user.user_name;
        this.billShareWith.push(this.billsharewith);
      });
    this.paidby = "Select Payer";

  }


  addpayer(id, amt) {
    this.payer = new PayerResponse();
    this.payer.paid_byId = id;
    this.payer.amount_paid = amt;
    this.payers.push(this.payer);
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

  AddBillMember(id, name) {
    this.billsharewith = new Detail();
    this.billsharewith.id = id;
    this.billsharewith.name = name;
    this.billShareWith.push(this.billsharewith);
  }

  removeMember(id) {
    var index = this.billShareWith.findIndex(c => c.id === id);
    console.log(index);
    if (index == 0) {
      alert("user cannot be removed");
    }
    else
    this.billShareWith.splice(index, 1);
  }
  showsett() {
    if (this.showInfo == true) {
      this.showInfo = false;
      this.showSettle = true;
    }
  }

  addSettlement() {
    this.settleUp.payerId = this.id;
    this.settleUp.payeeId = this.Pay_to_Id;
    this.settleUp.paid_amount = this.settleAmt;
    this.settleUp.groupId = this.Pay_in;
    this.my_date = new Date().toLocaleString();
    this.settleUp.paid_on = this.my_date;
    this.bill_service.settleUp(this.settleUp).subscribe(data => console.log(data));
  }


  nonGroup() {
    this.bill_service.getFriendSettlements(this.id, this.Pay_to_Id)
      .subscribe((data: GetSettlementResponse[]) => {
        this.friendSettlement = data;
     //   console.log(this.friendSettlement);
        if (this.friendSettlement != null) {

          var isSettlement = this.friendSettlement.find(c => c.group == null);
          // console.log(isSettlement);
          if (isSettlement != null) {
            if (isSettlement.payer.id == this.id)
              this.settleAmt = isSettlement.amount;
            else {
              this.settleAmt = 0;
            }
          }
          else {
            this.settleAmt = 0;
          }
        }
        else {
          this.settleAmt = 0;
        }
      });
  }

  GroupSet(id) {
    
    this.bill_service.getFriendSettlements(this.id, this.Pay_to_Id)
      .subscribe(
        (data: GetSettlementResponse[]) => {
        
         console.log(this.friendSettlement);
          if (this.friendSettlement != null) {
            var isSettlement = this.friendSettlement.find(c => c.group != null && c.group.id == id);
            //this.isSett = this.friendSettlement.includes(c => c.group != null);
            //console.log(isSettlement);
            //var isSettlement = this.isSett.find(c => c.group.id == id);
          if (isSettlement != null) {
            if (isSettlement.payer.id == this.id)
              this.settleAmt = isSettlement.amount;
            else {
              this.settleAmt = 0;
            }
          }
          else {
            this.settleAmt = 0;
          }
        }
        else {
          this.settleAmt = 0;
        }

      });
  }

  selectGroup(id, name) {
    console.log(id);
    this.setAmong = name;
    this.Pay_in = id;
      this.GroupSet(id);
    //console.log(this.Pay_to_Id);
  }

  showGroups() {
    this.group_service.getFriendGroups(this.id, this.Pay_to_Id)
      .subscribe((data: CreateGroupResponse[]) => {
        //console.log(data)
        this.groups = data;
      });

  }

  selectFriend(id, name) {
    this.Pay_to = name;
    this.Pay_to_Id = id;
    this.nonGroup();

  }

  selectNonGroup() {
    this.setAmong = "Non Group";
    this.nonGroup();
  }

  showpayer() {
    this.paidby = "multiple"
    if (this.showPayer == false)
      this.showPayer = true;
    else
      this.showPayer = false;
  }


  AddBillData() {
    this.my_date = new Date().toLocaleString();
    this.addBill.bill_created_at = this.my_date;
    this.addBill.bill_created_byId = this.id;
    this.addBill.bill_updated_at = this.my_date;
    this.addBill.bill_updated_byId = this.id;
    if (this.payers.length == 0) {
      this.payers.push(this.payer);
    }
    var div = this.addBill.total_amount / this.billShareWith.length;
    for (var i = 0; i < this.billShareWith.length; i++) {
      this.shareMember = new SharedWithResponse();
      this.shareMember.owes_amount = div;
      this.shareMember.shared_withId = this.billShareWith[i].id;
      this.shareMembers.push(this.shareMember);
    }




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
          if (this.settlement.paid_amount != 0)
            this.settlements.push(this.settlement);
        }
      }
    }
    else {
      for (var i = 0; i < this.shareMembers.length; i++) {
        this.sett = new settle();

        this.sett.id = this.shareMembers[i].shared_withId;
        var amt = 0;
        for (var j = 0; j < this.payers.length; j++) {
          if (this.shareMembers[i].shared_withId === this.payers[j].paid_byId) {
            if (this.payers[j].amount_paid == div) {
              amt = 1;
            }
            else if (this.payers[j].amount_paid > div) {
              amt = this.payers[j].amount_paid - div;
              this.sett.amt = amt;
              this.setPayers.push(this.sett);
            }

            else {
              amt = this.shareMembers[i].owes_amount - this.payers[j].amount_paid;
              this.sett.amt = amt;
              this.setShares.push(this.sett);
            }
          }
        }
        if (amt == 0) {
          this.sett.amt = this.shareMembers[i].owes_amount;
          this.setShares.push(this.sett);
        }
      }

      //console.log(this.setPayers);
      //console.log(this.setShares);


      if (this.setPayers.length > 1) {

        if (this.setShares.length == 1) {
          for (var i = 0; i < this.setPayers.length; i++) {
            this.settlement = new SettlementResponse();
            this.settlement.payerId = this.setShares[0].id;
            this.settlement.payeeId = this.setPayers[i].id;
            this.settlement.paid_amount = this.setPayers[i].amt;
            if (this.settlement.paid_amount != 0)
              this.settlements.push(this.settlement);
          }
        }
        else {
          for (var i = 0; i < this.setShares.length; i++) {
            var mem = this.setPayers.find(data => data.amt === this.setShares[i].amt);
            var index = this.setPayers.findIndex(data => data.amt === this.setShares[i].amt);
            //console.log(index);

            if (mem != null) {
              this.settlement = new SettlementResponse();
              payer = this.setShares[i].id;
              payee = mem.id;
              amt = mem.amt;
              this.setPayers[index].amt = this.setPayers[index].amt - amt;
              this.settlement.payerId = payer;
              this.settlement.payeeId = payee;
              this.settlement.paid_amount = amt;
              if (this.settlement.paid_amount != 0)
                this.settlements.push(this.settlement);
            }

            else {
              for (var j = 0; j < this.setPayers.length; j++) {
                if (this.setPayers[j].amt > this.setShares[i].amt) {
                  this.settlement = new SettlementResponse();
                  this.settlement.payerId = this.setShares[i].id;
                  this.settlement.payeeId = this.setPayers[j].id;
                  this.settlement.paid_amount = this.setShares[i].amt;
                  this.setShares[i].amt = this.setShares[i].amt - this.settlement.paid_amount;
                  this.setPayers[j].amt = this.setPayers[j].amt - this.settlement.paid_amount;
                  if (this.settlement.paid_amount != 0)
                    this.settlements.push(this.settlement);
                }
                else if (this.setPayers[j].amt > 0) {
                  this.settlement = new SettlementResponse();
                  this.settlement.payerId = this.setShares[i].id;
                  this.settlement.payeeId = this.setPayers[j].id;
                  this.settlement.paid_amount = this.setPayers[j].amt;
                  this.setShares[i].amt = this.setShares[i].amt - this.settlement.paid_amount;
                  this.setPayers[j].amt = this.setPayers[j].amt - this.settlement.paid_amount;
                  if (this.settlement.paid_amount != 0)
                    this.settlements.push(this.settlement);
                }
              }
            }
          }
        }
      }
      else if (this.setPayers.length == 1) {
        for (var i = 0; i < this.setShares.length; i++) {
          this.settlement = new SettlementResponse();
          this.settlement.payerId = this.setShares[i].id;
          this.settlement.payeeId = this.setPayers[0].id;
          this.settlement.paid_amount = this.setShares[i].amt;
          if (this.settlement.paid_amount != 0)
            this.settlements.push(this.settlement);
        }
      }


      //console.log(this.setPayers);
      //console.log(this.setShares);

    }
    this.addBill.payers = this.payers;
    this.addBill.sharedwiths = this.shareMembers;
    this.addBill.settlements = this.settlements;
    console.log(this.addBill);
    this.bill_service.addNewBill(this.addBill)
      .subscribe(data => console.log(data));
  }

}


