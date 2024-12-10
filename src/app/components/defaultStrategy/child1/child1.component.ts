import { Component, DoCheck, HostListener } from '@angular/core';

@Component({
  selector: 'ds-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component implements DoCheck {

  renderCount: number = 0;
  counter: number = 0;

  ngDoCheck(): void {
    this.renderCount++;
    console.log("default strategy child 1 ngDoCheckFunction was executed.")
  }

  // @HostListener("mousemove") onMove() {
  //   this.renderCount++;
  // }

  incrementCounter() {
    this.counter++;
  }

  

}
