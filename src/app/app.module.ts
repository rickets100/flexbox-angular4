import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StackPanelComponent } from './stack-panel/stack-panel.component';
import { FooComponent } from './foo/foo.component';
import { OrientationDirective } from './orientation.directive';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';

@NgModule({
  declarations: [
    AppComponent,
    StackPanelComponent,
    FooComponent,
    OrientationDirective,
    BarComponent,
    BazComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
