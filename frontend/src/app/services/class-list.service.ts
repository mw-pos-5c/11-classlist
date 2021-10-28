import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import Clazz from "../models/Clazz";
import Student from "../models/Student";
import StudentMove from "../models/StudentMove";

@Injectable({
  providedIn: 'root'
})
export class ClassListService {

  private baseUrl = 'http://localhost:5000/api/';

  public clazzes : Clazz[] = [];
  public selectedClazz: Clazz | null = null;
  public selectedStudents: Student[] = [];

  public selectableClazzes: Clazz[] = [];

  public studentMoves: Subject<StudentMove> = new Subject<StudentMove>();

  constructor(private http: HttpClient) {
    this.getClazzes().subscribe(value => {
      this.clazzes = value;
    })
  }

  public setSelectedClazz(clazz: Clazz) {
    this.selectedClazz = clazz;
    this.getStudents(clazz.id).subscribe(value => {
      this.selectedStudents = value;
      this.selectableClazzes = this.clazzes.filter(value1 => value1.id !== clazz.id);
      console.log(value);
    });
  }

  public getClazzes(): Observable<Clazz[]> {
    return this.http.get<Clazz[]>(`${this.baseUrl}clazzes`);
  }

  public getStudents(clazzId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}students?classId=${clazzId}`);
  }

  public setStudentAge(studentId: number, age: number): Observable<never> {
    return this.http.get<never>(`${this.baseUrl}students/${studentId}/age?age=${age}`);
  }

  public setStudentClazz(studentId: number, clazzId: number): Observable<never> {
    return this.http.get<never>(`${this.baseUrl}students/${studentId}/clazz?clazzId=${clazzId}`);
  }



}
