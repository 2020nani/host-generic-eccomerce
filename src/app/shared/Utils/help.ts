import { loadRemoteModule } from '@angular-architects/module-federation';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function loadMicrofrontendModule() {
  return loadRemoteModule({
    remoteName: 'store',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: './CheckoutComponent'
  }).then(m => m.SharedModule);
}

export function handleError(error: HttpErrorResponse) {
  let errorMessage = 'Erro desconhecido!';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Erro: ${error.error.message}`;
  } else {
    errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
  }

  return throwError(errorMessage);
}


