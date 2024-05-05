import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadComponentService } from './services/load-component.service';
import { LoadComponentDirective } from './directives/load-component.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoadComponentDirective],
  template:`
  App Component <br>
<button (click)="load()">Load Component</button>
<ng-template #appLoadComponent></ng-template>
  `
})
export class AppComponent {
  title = 'DemoApp15';
  loadComponentService=inject(LoadComponentService);
  @ViewChild("appLoadComponent",{read:ViewContainerRef}) abc:ViewContainerRef;
  async load(){
   
this.loadComponentService.loadComponent(this.abc, (( await import('./components/example/example.component')).ExampleComponent))
  }
}
