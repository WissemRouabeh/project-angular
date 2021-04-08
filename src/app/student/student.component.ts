import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentss = [
    {
      name: 'Will Smith',
      email: 'email@qsd.com',
      country: 'USAs',
    },

    {
      name: 'Will Smith',
      email: 'email@qsd.com',
      country: 'USA',
    },

    {
      name: 'Will Smith',
      email: 'email@qsd.com',
      country: 'FR',
    },

    {
      name: 'Will Smith',
      email: 'email@qsd.com',
      country: 'UK',
    },

    {
      name: 'Will Smith',
      email: 'email@qsd.com',
      country: 'USA',
    },

    {
      name: 'Will Smith',
      email: 'email@qsd.com',
      country: 'USA',
    },
  ];

  students: any;

  constructor(public apiservice: ApiserviceService, public router: Router) {
    this.students = [];
  }

  ngOnInit(): void {
    this.apiservice.getListStudents().subscribe((response) => {
      this.students = response;
    });
  }
  delete(id: any) {
    this.apiservice.deleteStudent(id).subscribe((response) => {
      console.log(response);
    });
  }
  update(id: any) {
    this.router.navigateByUrl('/edit/' + id);
  }
}
