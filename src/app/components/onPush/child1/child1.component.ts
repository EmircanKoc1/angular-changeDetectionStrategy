import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'os-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component {
  renderCount: number = 0;
  counter: number = 0
  // isExecutedTimeout: boolean = false;
  @Input() isExecutedTimeout : boolean = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    setTimeout(() => {
      
      this.isExecutedTimeout = true;
      console.log("isExecutedTimeout : ", this.isExecutedTimeout);
      // changeDetectorRef.markForCheck();
      // changeDetectorRef.detectChanges();
    }, (1000));
  }


  ngDoCheck(): void {
    this.renderCount++;
    console.log("onpush strategy child 1 ngDoCheckFunction was executed.")
  }


  // @HostListener("mousemove") onMove() {
  //   this.renderCount++;
  // }

  incrementCounter() {
    this.counter++;
  }

}
