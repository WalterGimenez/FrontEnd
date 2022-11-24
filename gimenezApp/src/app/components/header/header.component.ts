import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
form: FormGroup;
  constructor(private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group(
      {

      }
    )
    }
  ngOnInit(): void {
  }

}
