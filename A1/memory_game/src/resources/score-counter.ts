 import { singleton } from "aurelia";


 @singleton()
 export class ScoreCounter {
 public misses: number;

 constructor() {
 this.misses = 0;
 }

public addMiss(): void {
 this.misses += 1;
 } 

 public reset(): void {
 this.misses = 0;
 }
 }