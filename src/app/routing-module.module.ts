import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { FormsModule } from '@angular/forms';
import { GroupService } from './Services/GroupService';
import { GroupBoardComponent } from './group-board/group-board.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { FriendBoardComponent } from './friend-board/friend-board.component';
import { FriendService } from './Services/FriendService';
import { BillService } from './Services/BillService';
import { ExpenseComponent } from './expense/expense.component';
import { HubConnectionService } from './Services/HubService';

const appRoutes: Routes = [
  {
  path: 'Board/:id',
  component: BoardComponent,
    children: [
      { path: 'expense', component: ExpenseComponent },
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'group/:gpid', component: GroupBoardComponent },
    { path: 'friend/:frdid', component: FriendBoardComponent },
    { path: 'newgroup', component: CreateGroupComponent },
    {
      path: 'account/setting',
      component: UserSettingComponent
    }
  ],
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    BoardComponent,
    DashboardComponent,
    UserSettingComponent,
    FriendBoardComponent,
    GroupBoardComponent,
    ExpenseComponent,
    CreateGroupComponent],
  providers: [GroupService, FriendService, BillService, HubConnectionService],

})
export class RoutingModuleModule { }
