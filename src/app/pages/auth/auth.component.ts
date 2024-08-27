import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  signinForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Formulário de Sign in
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });

    // Formulário de Sign up
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSignIn() {
    if (this.signinForm.valid) {
      // Lógica de sign in
      console.log('Sign in form values:', this.signinForm.value);
    }
  }

  onSignUp() {
    if (this.signupForm.valid) {
      // Lógica de sign up
      console.log('Sign up form values:', this.signupForm.value);
    }
  }
}
