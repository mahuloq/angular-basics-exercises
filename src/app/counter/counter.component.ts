import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  number: number = 0;

  increase() {
    this.number = this.number + 1;
  }

  decrease() {
    this.number = this.number - 1;
  }
}
