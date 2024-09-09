import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  @Input() member?: Member;

  constructor(
    private route: ActivatedRoute, //URLのパラメータやハッシュフラグメントを取得するためのサービス
    private memberService: MemberService,
    private location: Location //ブラウザバックやページを進むなどブラウザの機能をangularを通して使うためのサービス
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? ''); //現在のルートのURLパラメータから 'id' の値を取得しようとしている
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.memberService.updateMember(this.member!)
      .subscribe(() => this.goBack());
  }
}
