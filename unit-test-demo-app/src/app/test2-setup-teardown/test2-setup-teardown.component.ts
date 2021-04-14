import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-test2-setup-teardown',
  templateUrl: './test2-setup-teardown.component.html',
  styleUrls: ['./test2-setup-teardown.component.css']
})
export class Test2SetupTeardownComponent implements OnInit {
  totalVotes = 0;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }

}
