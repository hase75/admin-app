import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Member } from './member';

@Injectable({
  providedIn: 'root' //アプリケーションのどこからでも使用できる
})
export class MemberService {

  constructor() { }

  getMembers(): Member[] {
    return MEMBERS;
  }
}
