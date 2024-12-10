import { Component, DoCheck } from '@angular/core';
import { Child1Component } from "../child1/child1.component";
import { Child3Component } from "../child3/child3.component";
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'ds-parent',
  standalone: true,
  imports: [Child1Component, Child3Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements DoCheck {

  counter: number = 0;
  renderCount: number = 0;

  ngDoCheck(): void {
    this.renderCount++;
    console.log("default strategy parent ngDoCheckFunction was executed.")
  }

  incrementCounter() {
    this.counter++;
  }

}
