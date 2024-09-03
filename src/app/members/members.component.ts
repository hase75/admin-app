import { Component, OnInit } from '@angular/core';
import { Member} from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit {

  members?: Member[];
  selectedMember?: Member; // オプショナルプロパティとして定義

  //自身のプロパティなどのデータを初期化するために使われる
  constructor(private memberService: MemberService) {} //DI（Dependency Injection）　依存していた部分を、外から注入すること

  //外部からデータを取得する際はngOnInit内に記述する
  //ライフサイクルメソッド
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.members = this.memberService.getMembers();
  }

}
