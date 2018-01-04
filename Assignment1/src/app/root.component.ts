/**
 * @class RootComponent
 * ClassDecorator [@component]
 * selector [my-app-component]
 */

import { Component } from  '@angular/core';

@Component({
    selector: 'my-app-component',
    templateUrl: './app.component.html' 
  })

  // need to add RootComponent in @NgModule
export class RootComponent {

}  