import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs'; //非同期処理
import { Member } from './member';

@Injectable({
  providedIn: 'root' //アプリケーションのどこからでも使用できる
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS); //ofでMEMBERSの値をObservableに変換している
  }
}
