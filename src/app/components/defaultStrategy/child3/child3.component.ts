import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ds-child3',
  standalone: true,
  imports: [],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component {
  renderCount: number = 0;
  counter: number = 0;
  ngDoCheck(): void {
    this.renderCount++;
    console.log("default strategy child 3 ngDoCheckFunction was executed.")
  }

  // @HostListener("mousemove") onMove() {
  //   this.renderCount++;
  // }

  incrementCounter() {
    this.counter++;
  }
}
