import { Component } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";
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
     private cardService: CardService,
     private toast: HotToastService
 ){
 }
 
 public shuffle(){
     if(this.noOfCards !== ''){
        this.cardService
        .getSuffledCards(Number(this.noOfCards))
        .subscribe(
            (cards:string[])=>{
                cards.forEach((element,i) => {
                    if(element.includes('D')){
                        element = element.replace(/D/g,'◆');
                        cards[i] = element;
                    }
                    if(element.includes('H')){
                        element = element.replace(/H/g,'♥');
                        cards[i] = element;
                    }
                    if(element.endsWith('S')){
                        element = element.replace(/S/g,'♠');
                        cards[i] = element;
                    }
                    if(element.includes('C')){
                        element = element.replace(/C/g,'♣');
                        cards[i] = element;
                    }
                });
                this.cards = cards
                this.toast.success('Cards shuffled successfully');
            }
        )
     }
     else{
         this.cards = [];
         this.toast.error("Kindly enter no of cards")
     }
    }

    public sortCards(){
if(this.cards.length >0){
        this.cards.forEach((element,i) => {
            if(element.includes('◆')){
                element = element.replace(/◆/g,'D');
                this.cards[i] = element;
            }
            if(element.includes('♥')){
                element = element.replace(/♥/g,'H');
                this.cards[i] = element;
            }
            if(element.endsWith('♠')){
                element = element.replace(/♠/g,'S');
                this.cards[i] = element;
            }
            if(element.includes('♣')){
                element = element.replace(/♣/g,'C');
                this.cards[i] = element;
            }
        });
        this.cardService
        .getSortedCards(this.cards)
        .subscribe(
            (cards:string[])=>{
                cards.forEach((element,i) => {
                    if(element.includes('D')){
                        element = element.replace(/D/g,'◆');
                        cards[i] = element;
                    }
                    if(element.includes('H')){
                        element = element.replace(/H/g,'♥');
                        cards[i] = element;
                    }
                    if(element.endsWith('S')){
                        element = element.replace(/S/g,'♠');
                        cards[i] = element;
                    }
                    if(element.includes('C')){
                        element = element.replace(/C/g,'♣');
                        cards[i] = element;
                    }
                });
                this.cards = cards;
                this.toast.success('Cards sorted successfully');
            }
        )
}
else{
    this.toast.error("Kindly shuffle the cards");
}
    }
}