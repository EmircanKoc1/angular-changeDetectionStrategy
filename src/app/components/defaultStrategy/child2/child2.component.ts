import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ds-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {

  renderCount: number = 0;
  counter: number = 0;
  ngDoCheck(): void {
    this.renderCount++;
    console.log("default strategy child 2 ngDoCheckFunction was executed.")
  }

  // @HostListener("mousemove") onMove() {
  //   this.renderCount++;
  // }

  incrementCounter() {
    this.counter++;
  }
}
