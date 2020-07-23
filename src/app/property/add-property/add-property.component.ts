import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addProperty: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Your form has been submitted successfully!!!');
    console.log(this.addProperty);
  }

}
