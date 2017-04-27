import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css']
})
export class NamesListComponent implements OnInit {
  @Input() nameElement: string;

  constructor() { }

  ngOnInit() {
  }

}
