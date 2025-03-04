
import {inject} from "aurelia";
import { ScoreCounter } from "./resources/score-counter";
import { Card } from "./views/card";


const symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

@inject(ScoreCounter)
export class MyApp {
public cards: Card[];

constructor(
  private scoreCounter: ScoreCounter
) { }

public generate(): void{
  this.cards= [];
  this.scoreCounter.reset();
  for(let s of symbols) {
  const card1: Card= {symbol: s , visible: true, matched : false};
  const card2: Card= {symbol: s , visible: true, matched : false};
  this.cards.push(card1);
  this.cards.push(card2);
  }
  this.shuffle(this.cards);
 setTimeout(() =>this.cards.forEach(c=>c.visible=false), 5000);
}

 public shuffle(array:Card[]):void{
  for(let i=0; i<array.length; i++) {
  const j=Math.floor(Math.random() *array.length);
  [array[i], array[j]] =[array[j], array[i]];
  }
  // This is a hack to force the cards to re‐render ‐> necessary since the array is mutated in place
  this.cards.push();
  this.cards.pop();
  }

 
    public showCard(selected: Card): void {
    if (selected.matched) return;
    const candidate = this.cards.find(c => c.visible && !c.matched
    && c != selected);
    if (candidate && candidate.symbol === selected.symbol) {
    selected.matched = true;
    candidate.matched = true;
    selected.visible = true;
    } else if (candidate && candidate.symbol !== selected.symbol) {
    selected.visible = false;
    candidate.visible = false;
    this.scoreCounter.addMiss();
    } else {
    selected.visible = true;
    selected.visible = true;
    }
    }
    



}