import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isShowMenu: boolean = false;
  @ViewChild('menu', { read: ViewContainerRef })
  viewContainerMenu!: ViewContainerRef;
  menuInstance: any;

  constructor(){
    this.load();
  }

  showMenu(event: any): void {
    console.log(event)
    this.isShowMenu = event;
    this.isShowMenu ? this.menuInstance.showMenu() : this.menuInstance.hideMenu();
  }

  async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './ComponentP'
    });

    const ref: any= this.viewContainerMenu.createComponent(m.ModalMenuComponent);
    this.menuInstance = ref.instance;
}

}
