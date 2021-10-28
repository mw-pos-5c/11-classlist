import { Component, OnInit } from '@angular/core';
import StudentMove from "../../models/StudentMove";
import {ClassListService} from "../../services/class-list.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(private data: ClassListService) { }

  moves: StudentMove[] = [];

  ngOnInit(): void {
    this.data.studentMoves.subscribe(value => {
      console.log("newmove", value);
      this.moves.push(value);
    })
  }
}
