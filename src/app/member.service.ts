import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs'; //非同期処理
import { Member } from './member';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' //アプリケーションのどこからでも使用できる
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add(`MemberService: 社員一覧データを取得しました`)
    return of(MEMBERS); //ofでMEMBERSの値をObservableに変換している
  }

  getMember(id: number): Observable<Member> {
    this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました`);
    return of(MEMBERS.find(member => member.id === id)!); //配列の中でidがマッチするものを1つだけ取得
  }
}
