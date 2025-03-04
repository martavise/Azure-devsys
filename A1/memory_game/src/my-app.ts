


import { Card } from "./views/card";
const symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export class MyApp {
public cards: Card[];
publicgenerate(): void{
  this.cards= [];
  for(let s of symbols) {
  const card1: Card= {symbol: s , visible:true, matched:false};
  const card2: Card= {symbol: s , visible:true, matched:false};
  this.cards.push(card1);
  this.cards.push(card2);
  }
}
}