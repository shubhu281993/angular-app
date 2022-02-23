import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.less'],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  red: boolean = false;
  black: boolean = false;
  show: boolean = false;

  ngOnInit(): void {
    debugger;
    if (this.title.includes('◆') || this.title.includes('♥')) {
      this.red = true;
      this.black = false;
    }
    
    if (this.title.includes('♠') || this.title.includes('♣')) {
      this.black = true;
      this.red = false;
    }
    this.show = true;
  }
}
