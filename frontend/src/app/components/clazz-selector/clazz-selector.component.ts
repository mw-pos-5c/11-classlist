import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Clazz from "../../models/Clazz";

@Component({
  selector: 'app-clazz-selector',
  templateUrl: './clazz-selector.component.html',
  styleUrls: ['./clazz-selector.component.scss']
})
export class ClazzSelectorComponent implements OnInit {

  constructor() { }

  @Input() clazzes!: Clazz[];

  @Output() selected: EventEmitter<Clazz> = new EventEmitter<Clazz>();

  ngOnInit(): void {
  }

}
