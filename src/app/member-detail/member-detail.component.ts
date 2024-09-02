import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  @Input() member?: Member;

  constructor() {}

  ngOnInit(): void {}
}
