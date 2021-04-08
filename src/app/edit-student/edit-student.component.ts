import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  public edit: FormGroup;
  private id: number;
  private st: any;
  constructor(
    public formbuilder: FormBuilder,
    public ActivatedRoute: ActivatedRoute,
    public apiservice: ApiserviceService
  ) {
    this.edit = formbuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
    });
    this.id = this.ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.apiservice.getStudent(this.id).subscribe((response) => {
      this.st = response;
      this.edit.patchValue(this.st);
    });
  }
  update() {
    this.apiservice
      .updateStudent(this.id, this.edit.value)
      .subscribe((response) => {
        alert('ok !');
        console.log(response);
      });
  }
}
