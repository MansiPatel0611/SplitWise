import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillResponse, TransactionResponse } from '../Models/Model';
@Injectable()
export class BillService {

  constructor(private http: HttpClient) {
  }
  addNewBill(bill: BillResponse) {
    return this.http.post("api/Bill/addBill", bill);
  }
  getGroupBills(id: number) {
    return this.http.get("api/Bill/getGroupBills/" + id);
  }
  getFriendBills(userid: number, friendid: number) {
    return this.http.get("api/Bill/getFriendBills/" + userid + "/" + friendid);
  }
  getFriendSettlements(userid: number, friendid: number) {
    return this.http.get("api/settlements/" + userid + "/" + friendid);
  }

  settleUp(settle: TransactionResponse) {
    return this.http.post("api/settleup", settle);
  }

  getGroupSettlement(userid: number, groupid: number) {
    return this.http.get("api/GroupSettlements/" + userid + "/" + groupid);
  }
}
