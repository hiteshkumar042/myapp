import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  countVal = signal(0)

  increment() {
    this.countVal.update(val => val + 1)
  }

  decrement() {
    this.countVal.update(val=>val-1)
  }

  reset() {
this.countVal.set(0)
  }
}
