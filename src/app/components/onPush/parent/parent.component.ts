import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Child1Component } from "../child1/child1.component";
import { Child2Component } from "../child2/child2.component";
import { Child3Component } from "../child3/child3.component";

@Component({
  selector: 'os-parent',
  standalone: true,
  imports: [Child1Component, Child2Component, Child3Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  renderCount: number = 0;
  counter: number = 0;
  timeoutCounter: number = 0;



  constructor(private changeDetectorRef: ChangeDetectorRef) {

    //The parent component does not render
    // setTimeout(() => {
    //   this.timeoutCounter++;
    // }, (3000));


    // The parent component render
    setTimeout(() => {
      this.timeoutCounter++;
      changeDetectorRef.markForCheck();
      // changeDetectorRef.detectChanges();
      console.log("timeout counter has been incremented");
      
    }, (3000));

  }

  ngDoCheck(): void {
    this.renderCount++;
    console.log("onpush strategy parent ngDoCheckFunction was executed.")

  }

  incrementCounter() {
    this.counter++;
  }

  


}
