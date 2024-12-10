import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'os-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {
  renderCount: number = 0;
  counter: number = 0;
  
  ngDoCheck(): void {
    this.renderCount++;
    console.log("onpush strategy child 2 ngDoCheckFunction was executed.")

  }


  // @HostListener("mousemove") onMove() {
  //   this.renderCount++;
  // }


  incrementCounter() {
    this.counter++;
  }


}

