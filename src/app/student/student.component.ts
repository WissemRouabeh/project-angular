import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students = [
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
  constructor() {}

  ngOnInit(): void {}
}
