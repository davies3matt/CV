import { Component, AfterViewInit } from '@angular/core';
import { SlideInOutAnimation } from './animation';


@Component({
  selector: 'app-root',
  styles: [
    `
      app-gradient-button {
        display: block;
        margin: auto;
        justify-content: center;
        align-items: center;
      }

      app-gradient-button {
        width: 180px;
      }
    `
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})

export class AppComponent {
  title = 'my-cv';
  animationState = 'in';

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
    
}
}




