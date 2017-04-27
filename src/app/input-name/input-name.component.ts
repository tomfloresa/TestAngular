import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {
  name: string;

  @Output() eventAddName: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  addName() {
    console.log(this.name);
    this.eventAddName.emit(this.name);
    this.name = '';
  }

  deleteName() {

  }
}
