import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public add: FormGroup;
  constructor(
    public formbuilder: FormBuilder,
    public apiservice: ApiserviceService
  ) {
    this.add = formbuilder.group({
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
  }

  ngOnInit(): void {}
  onadd() {
    const data = this.add.value;
    this.apiservice.createStudent(data).subscribe((response) => {
      console.log(response);
    });
  }
}
