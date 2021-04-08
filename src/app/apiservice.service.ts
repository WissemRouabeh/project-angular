import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  base_path = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createStudent(st: any): Observable<Student> {
    return this.http.post<Student>(
      this.base_path,
      JSON.stringify(st),
      this.httpOptions
    );
  }

  getStudent(id: any): Observable<Student> {
    return this.http.get<Student>(this.base_path + '/' + id);
  }

  getListStudents(): Observable<Student> {
    return this.http.get<Student>(this.base_path);
  }
  deleteStudent(id: any): Observable<Student> {
    return this.http.delete<Student>(this.base_path + '/' + id);
  }
  updateStudent(id: any, data: any): Observable<Student> {
    return this.http.put<Student>(this.base_path + '/' + id, data);
  }
}
