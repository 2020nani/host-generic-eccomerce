import { PetrepetapiService } from './../../shared/services/petrepetapi/petrepetapi.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  signinForm: FormGroup;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private petrepetapiService: PetrepetapiService,
    private toastr: ToastrService
  ) {
    // Formulário de Sign in
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });

    // Formulário de Sign up
    this.signupForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue],
      roles: [{
        "id": 2,
        "roleAcess": "ROLE_USER"
      }]
    });

  }

  onSignIn() {
    if (this.signinForm.valid) {
        this.authService.login(this.signinForm.value as User)
        .subscribe(
          (data) => {
            this.toastr.success(`Seja bem vindo ${data.nome}`, 'Success')
          },(error) => {
          this.toastr.error("Usuario ou senha nao existe", 'Error')
        })
    }
  }

  onSignUp() {
    if (this.signupForm.valid) {
      this.petrepetapiService.createUser({...this.signupForm.value, roles: [{
        "id": 2,
        "roleAcess": "ROLE_USER"
      }]} as User).subscribe((data) => {
        this.toastr.success(`Usuario ${data.nome} cadastrado com sucesso!`, 'Sucesso');
      },
      (error) => {
        this.toastr.error(`Nao foi possivel cadastrar usuario ${this.signupForm.value.nome}`, 'Erro');
        return error;
      })
    }
  }
}
