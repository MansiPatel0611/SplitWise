import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../Services/GroupService';
import { GroupResponse, FriendResponse, Group, BillResponse, PayerResponse, SharedWithResponse, Bill, SettlementResponse, settle, User, BillGetResponse, GetSettlementResponse, GroupBalance, GroupBalanceDetail, Detail, TransactionGetResponse, CommonResponse, GroupMember } from '../Models/Model';
import { UserService } from '../Services/UserService';
import { BillService } from '../Services/BillService';
import { HubConnectionService } from '../Services/HubService';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-group-board',
  templateUrl: './group-board.component.html',
  styleUrls: ['./group-board.component.css']
})
export class GroupBoardComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;
  @ViewChild('closePayerModal') closePayerModal: ElementRef;


  public grpmem = new GroupMember();
  public grpmems = new Array<GroupMember>();

  public remgrpmem = new GroupMember();
  public remgrpmems = new Array<GroupMember>();

  public group = new GroupResponse();
  public newGroup = new Group();
  friends: FriendResponse[];
  nonGroupFriends:FriendResponse[];
  public addBill = new BillResponse();

  bills: BillGetResponse[];
  public payer = new PayerResponse();
  payers = new Array<PayerResponse>();

  public shareMember = new SharedWithResponse();
  shareMembers = new Array<SharedWithResponse>();

  public settlement = new SettlementResponse();
  settlements = new Array<SettlementResponse>();

  GroupSettlements: GetSettlementResponse[];
  groupBalance = new Array<GroupBalance>();
  balance = new GroupBalance();
  info = new Detail();

  details = new Array<GroupBalanceDetail>();
  detail = new GroupBalanceDetail();

  paidby: any;
  public sett = new settle();
  //setts = new Array<settle>();

  setPayers = new Array<settle>();
  setShares = new Array<settle>();

  showvarible: any = false;
  showlist: any = false;
  showPayer: boolean = false;
  my_date: any;
  userid: number;
  id: number;
  status: boolean;
  isDepth: boolean;
  amount: any = "";

  showSettings: boolean= false;
  showBalance: boolean = true;

  showbill: boolean = false;

  transactions: TransactionGetResponse[];

  constructor(private route: ActivatedRoute, private router: Router, private service: HubConnectionService,
    private bill_service: BillService, private group_service: GroupService, private user_service: UserService) { }

  ngOnInit() {
     this.id = this.route.snapshot.params['gpid'];
//    console.log(id);

    this.route.parent.params.subscribe(params => {
      this.userid = params['id']
    });

    this.paidby = "Select Payer";
    this.group_service.GetGroupInfo(this.id).subscribe(
      (data: any) => {
      //  console.log(data),
          this.group = data;



        if (this.group.is_simplified_depts == true) {
          this.status = true;
          this.isDepth = this.status;
        }

        this.bill_service.getGroupSettlement(this.userid, this.id)
          .subscribe((data: GetSettlementResponse[]) => {
            this.GroupSettlements = data,
            //  console.log(this.GroupSettlements);

            this.user_service.getFriends(this.userid).subscribe
              ((data: FriendResponse[]) => {
                this.friends = data,
                  this.nonGroupFriends = data;

            for (var i = 0; i < this.group.memberLists.length; i++) {

              var place = this.nonGroupFriends.findIndex(c => c.userid == this.group.memberLists[i].id);
             // console.log(place);
              if (place >=0 ) {
                this.nonGroupFriends.splice(place, 1);
              }

              this.balance = new GroupBalance();
              this.info = new Detail();
              this.info.id = this.group.memberLists[i].id;
              this.info.name = this.group.memberLists[i].name;
              this.balance.member = this.info;

              this.balance.amt = 0;

              for (var j = 0; j < this.GroupSettlements.length; j++) {

                if (this.GroupSettlements[j].amount != 0) {

                  if (this.group.memberLists[i].id == this.GroupSettlements[j].payer.id) {
                    this.detail = new GroupBalanceDetail();
                    this.detail.id = this.group.memberLists[i].id;
                    this.detail.detail = this.group.memberLists[i].name + " owes ₹" +  this.GroupSettlements[j].amount
                      + " to " + this.GroupSettlements[j].payee.name;
                    this.details.push(this.detail);
                    this.balance.amt = this.balance.amt - this.GroupSettlements[j].amount;

                  }
                  if (this.group.memberLists[i].id == this.GroupSettlements[j].payee.id) {
                    this.detail = new GroupBalanceDetail();
                    this.detail.id = this.group.memberLists[i].id;
                    this.detail.detail = this.group.memberLists[i].name + " owes " + this.GroupSettlements[j].payer.name + " ₹" + this.GroupSettlements[j].amount;
                    this.details.push(this.detail);
                    this.balance.amt = this.balance.amt + this.GroupSettlements[j].amount;
                  }
                }

               
              }
              if (this.balance.amt == 0)
                this.balance.status = "settled";
              else if (this.balance.amt < 0) {
                this.balance.amt = 0 - this.balance.amt;
                this.balance.status = "owes";

              }
              else
                this.balance.status = "gets";
              this.groupBalance.push(this.balance);

            }
          //  console.log(this.groupBalance);
              // console.log(this.details);
              console.log(this.nonGroupFriends);
          });

      });
      });


    this.bill_service.getGroupBills(this.id).subscribe((data: BillGetResponse[]) => {
      this.bills = data,
        console.log(this.bills)
    });

    this.bill_service.getGroupTransactions(this.id)
      .subscribe((data: TransactionGetResponse[]) => this.transactions = data);
   
  }


  toggleEditable(event) {
    if (event.target.checked) {
      this.isDepth = true;
    }
    else {
      this.isDepth = false
    }
  }  

  add(userid: number) {
    this.grpmem = new GroupMember();
    this.grpmem.userid = userid;
    this.grpmem.groupid = this.id;
    this.grpmems.push(this.grpmem);
    //this.group_service.addGroupMember(userid, this.id).subscribe
    //  (
    //  data => {
    //    console.log(data),
    //      this.service.update();
    //  });
  }
  remove(userid: number) {
    this.remgrpmem = new GroupMember();
    this.remgrpmem.userid = userid;
    this.remgrpmem.groupid = this.id;
    this.remgrpmems.push(this.remgrpmem);
    //this.group_service.removeGroupMember(userid, this.id).subscribe
    //  (data => { console.log(data), this.service.update() },
    //  error => alert("member have pending settlements in group"));
  }

  showList() {
    if (this.showlist == false)
      this.showlist = true;
    else
      this.showlist = false;
  }

  showpayer() {
    this.paidby = "multiple"
    if (this.showPayer == false)
      this.showPayer = true;
    else
      this.showPayer = false;
    this.payer = new PayerResponse();
  }

  showBill() {
    if (this.showbill == false)
      this.showbill = true;
    else
      this.showbill = false;
  }

  ShowSetting() {
    this.showSettings = true;
    this.showBalance = false;
  }
  ShowBalance() {
    this.showBalance = true;
    this.showSettings = false;
  }

  delete() {
    if (confirm("Are you sure you want to delete this group")) {
      this.group_service.deleteGroup(this.id)
        .subscribe((data: boolean) => {
          console.log(data),
            this.router.navigate(['/Board', this.userid])
            },
        error => alert("settlemets still exist"));
    }
   
  }

  onSubmit() {
    this.newGroup.groupid = this.id;
    this.newGroup.group_name = this.group.group_name;
    this.newGroup.group_created_by = this.group.group_created_by.id;
    this.newGroup.is_simplified_depts = this.isDepth;
    //console.log(this.newGroup);
    //console.log(this.group);
    //console.log(this.isDepth);
    for (var i = 0; i < this.grpmems.length; i++) {
      this.group_service.addGroupMember(this.grpmems[i].userid, this.grpmems[i].groupid).subscribe
        (
        data => {
          console.log(data)
            //this.service.update();
        });
    }
    for (var i = 0; i < this.remgrpmems.length; i++) {
      this.group_service.removeGroupMember(this.remgrpmems[i].userid, this.remgrpmems[i].groupid).subscribe
      (data => { console.log(data), this.service.update() },
      error => alert("member have pending settlements in group"));
    }
    this.group_service.updateGroup(this.id, this.newGroup).subscribe(data => console.log(data));
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

  addpayer(id, amt) {
    this.payer = new PayerResponse();
    this.payer.paid_byId = id;
    this.payer.amount_paid = amt;
    this.payers.push(this.payer);

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
      this.addBill.groupId = this.id;
      if (this.payers.length == 0) {
        this.payers.push(this.payer);
      }
      var div = Number.parseFloat((this.addBill.total_amount / this.group.memberLists.length).toFixed(2));
      // div = Math.round(div);
      for (var i = 0; i < this.group.memberLists.length; i++) {
        this.shareMember = new SharedWithResponse();
        this.shareMember.owes_amount = div;
        this.shareMember.shared_withId = this.group.memberLists[i].id;
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
            this.settlement.groupId = this.id;
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
              this.settlement.groupId = this.id;
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
                this.settlement.groupId = this.id;
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
                    this.settlement.groupId = this.id;
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
                    this.settlement.groupId = this.id;
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
            this.settlement.groupId = this.id;
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
