/* while its possible to create standalone component
this way and add neccessary support, we found that the
dev server is unable to properly process the project once
neccessary support are added to this kind of project
where support for other frameworks and components are also included

due to this reason, a separate angular project was created and built for use instead of this component*/

import { NgIf } from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-angular-component',
    standalone: true,
    imports: [NgIf],
    template: `
      <p>Hello from Angular!!</p>

      <button (click)="onClickCount()">Increase Count!</button>

      <p *ngIf="count > 0">with count {{count}}</p>
    `,
})
export class CustomAngularComponent {
    @Input() count: number = 0;

    onClickCount() {
        this.count ++;
    }
}