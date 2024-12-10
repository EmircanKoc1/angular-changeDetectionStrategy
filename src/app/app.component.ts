import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent as osParent } from "./components/onPush/parent/parent.component";
import { ParentComponent as dsParent } from "./components/defaultStrategy/parent/parent.component";
import { Child1Component } from "./components/onPush/child1/child1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [osParent, dsParent, Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-changeDetectionStrategy';
}
