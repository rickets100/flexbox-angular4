import { Component, OnInit } from '@angular/core';
import { FooComponent } from '../foo/foo.component';
import { OrientationDirective } from '../orientation.directive';

@Component({
  selector: 'app-stack-panel',
  templateUrl: './stack-panel.component.html',
  styleUrls: ['./stack-panel.component.css']

})
export class StackPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
