import {Component, OnInit} from '@angular/core';
import {ClassListService} from "../../services/class-list.service";
import Student from "../../models/Student";
import StudentMove from "../../models/StudentMove";
import Clazz from "../../models/Clazz";

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent implements OnInit {

  constructor(public data: ClassListService) {
  }



  displayAge(age: number) {
    const x = Math.floor(age/10);
    return (x*10) + '+';
  }

  ngOnInit(): void {
  }

  moveStudent(student: Student, target: Clazz) {
    const move: StudentMove = {student, fromClazz: this.data.selectedClazz!, toClazz: target}
    this.data.studentMoves.next(move);
    this.data.setStudentClazz(student.id, target.id).subscribe(_ => {
      this.data.setSelectedClazz(this.data.selectedClazz!);
    });
  }

  setStudentAge(row: Student, $event: Event) {
    // @ts-ignore
    const value = +$event.target?.value ?? 0;
    row.age = value;
    this.data.setStudentAge(row.id, value).subscribe();
  }
}
