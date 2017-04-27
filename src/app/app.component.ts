import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = [];

  nameAdded(event: Event) {
    this.names.push(event);
  }

  nameDeleted(event: number) {
    delete this.names[event];
  }
}
