import { bindable } from "aurelia"

export class Card {
    @bindable() visible: Boolean;
    @bindable() symbol: string;
    matched: boolean
    }