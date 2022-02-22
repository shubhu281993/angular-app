import { Component } from "@angular/core";
import { CardService } from "src/shared/services/card-service";

@Component({
    selector:'app-cards',
    styleUrls:['./cards.component.less'],
    templateUrl:'./cards.component.html'
})

export class CardsComponent{

    noOfCards:string ="";
    cards:string[] = [];
    
 constructor(
     private cardService: CardService
 ){}
 
 public shuffle(){
        this.cardService
        .getSuffledCards(Number(this.noOfCards))
        .subscribe(
            (cards:string[])=>{
                this.cards = cards
            }
        )
    }

    public sortCards(){
        this.cardService
        .getSortedCards(this.cards)
        .subscribe(
            (cards:string[])=>{
                this.cards = cards
            }
        )
    }
}