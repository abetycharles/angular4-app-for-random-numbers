import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  constructor() { }

  getRandomNumbers(){
    var numbs:number[] = [];
    for (var i=0; i<10; i++){
      numbs.push(this.getRandomNumber());
    }
    return numbs.sort((n1,n2) => n1 - n2);
  }
  getRandomNumber(){
    return Math.floor(Math.random() * 46) + 5;
  }
}
