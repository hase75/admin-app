import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; //string型の配列のmessagesプロパティに初期とを代入

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
