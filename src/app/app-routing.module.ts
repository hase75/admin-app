import { NgModule } from '@angular/core';
import { MembersComponent } from './members/members.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard' , pathMatch: 'full'}, //full:パスに完全一位しているか
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent} //membersというパスにアクセスした際にMembersComponentを表示させる
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //RouterModuleというroutingを行う機能をアプリケーション全体に適応する際にroutes情報を渡してroutingを有効にする処理
  exports: [RouterModule], //app.module.tsでルーティングの処理を使えるようにする設定
})
export class AppRoutingModule {}
