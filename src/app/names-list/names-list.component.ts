import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css']
})
export class NamesListComponent implements OnInit {
  @Input() nameElement: string;
  @Input() elementIndex: number;
  @Output() eventDeleteName: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteName() {
    this.eventDeleteName.emit(this.elementIndex);
  }
}
