export class User {
  constructor() {
  }
  public userid;
  public user_name: string;
  public email_id: string;
  public phone_no: string;
  public password: string;
}
export class FriendResponse {
  constructor() { }
  public userid;
  public user_name: string;
  public email_id: string
  public phone_no: string;
}
export class Group {
  constructor() { }
  public groupid;
  public group_name: string;
  public group_created_by: number;
  public is_simplified_depts: boolean;
}
export class CreateGroupResponse {
  constructor() { }
  public groupid;
  public group_name: string;
  public group_created_by;
  public is_simplified_depts: boolean;
  public groupMembers: GroupMember[];
}
export class GroupResponse {
  constructor() { }
  public groupid;
  public group_name: string;
  public group_created_by: Detail;
  public is_simplified_depts: boolean;
  public memberLists:Detail[];
}
export class CommonResponse {
  constructor() { }
  public id;
  public status: boolean;
}
export class GroupMember {
  constructor() { }
  public userid;
  public groupid;
}
export class Detail {
  constructor() { }
  public id;
  public name: string;
}
export class Bill {
  constructor() { }
  public billid;
  public description: string;
  public total_amount: number;
  public bill_created_byId: number;
  public bill_updated_byId: number;
  public bill_date: Date;
  public bill_created_at: Date;
  public bill_updated_at: Date;
  public groupId: number;
}
export class BillResponse {
  constructor() { }
  public billid;
  public description: string;
  public total_amount: number;
  public bill_created_byId: number;
  public bill_updated_byId: number;
  public groupId: number;
  public bill_date: Date;
  public bill_created_at: Date;
  public bill_updated_at: Date;
  public payers: PayerResponse[];
  public sharedwiths: SharedWithResponse[];
  public settlements: SettlementResponse[];
}
export class BillGetResponse {
  constructor() { }
  public billid;
  public description: string;
  public total_amount: number;
  public bill_created_byId: Detail;
  public bill_updated_byId: Detail;
  public groupId: Detail;
  public bill_date: Date;
  public bill_created_at: Date;
  public bill_updated_at: Date;
  public payers: BillDetail[];
  public sharedwiths: BillDetail[];
}
export class BillDetail {
  constructor() { }
  public id;
  public name: string;
  public amount: number;
}
export class PayerResponse {
  constructor() { }
  public paid_byId;
  public amount_paid: number;
  public billId: number;
}
export class SharedWithResponse {
  constructor() { }
  public shared_withId;
  public owes_amount: number;
  public billId: number;
}
export class SettlementResponse {
  constructor() { }
  public settlementid;
  public payerId: number;
  public payeeId: number;
  public paid_amount: number;
  public groupId: number;
}
export class GetSettlementResponse {
  constructor() { }
  public payer: Detail;
  public payee: Detail;
  public amount: number;
  public group: Detail;
}
export class settle {
  constructor() { }
  public id;
  public amt: number;
}
export class TransactionGetResponse {
  public payerId: Detail;
  public payeeId: Detail;
  public paid_amount: number;
  public paid_on: Date;
  public groupId: Detail;
}
export class TransactionResponse {
  public transactionid;
  public payerId: number;
  public payeeId: number;
  public paid_amount: number;
  public paid_on: Date;
  public groupId: number;
}
export class GroupBalance {
  constructor() { }
  public member: Detail;
  public amt: number;
  public status: string;
}
export class GroupBalanceDetail {
  constructor() { }
  public id: number;
  public detail: string;
}
