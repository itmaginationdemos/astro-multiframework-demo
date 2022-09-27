import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() count: number | undefined;

  onClickCount(){
    this.count ? this.count ++ : 1;
  }
}
