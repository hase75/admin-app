import { NgModule } from '@angular/core';
import { MembersComponent } from './members/members.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'members', component: MembersComponent }]; //membersというパスにアクセスした際にMembersComponentを表示させる

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
