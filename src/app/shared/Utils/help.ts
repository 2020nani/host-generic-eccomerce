import { loadRemoteModule } from '@angular-architects/module-federation';

export function loadMicrofrontendModule() {
  return loadRemoteModule({
    remoteName: 'store',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: './CheckoutComponent'
  }).then(m => m.SharedModule);
}
