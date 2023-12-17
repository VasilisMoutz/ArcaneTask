import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  // Reactive Form
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // Submit
  submit(): void {
    // instead of console.log use services
    console.log(this.loginForm.getRawValue());
  }
}



