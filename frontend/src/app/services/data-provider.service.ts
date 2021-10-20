import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Clazz from "../models/Clazz";
import Student from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {
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
