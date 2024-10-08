import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrl: './member-search.component.css',
})
export class MemberSearchComponent implements OnInit {
  members$!: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(private memberService: MemberService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      //キーボード入力後、300ms待って次の実行に移る
      debounceTime(300),
      //直前のデータと同じ場合は処理を実行しない
      distinctUntilChanged(),
      //検索キーワードを受け取る度に、新しいObservableを返す
      switchMap((term: string) => this.memberService.searchMembers(term))
    );
  }
}
