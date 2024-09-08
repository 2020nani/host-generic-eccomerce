export class User {
  nome: string;
  email: string;
  password: string;
  remember: boolean = false;
  roles: object[];

  constructor(nome: string, email: string, password: string, remember?: boolean, roles?: object[]) {
    this.nome = nome;
    this.email = email;
    this.password = password;
    this.remember = remember ?? false;
    this.roles = [{}]
  }
}
