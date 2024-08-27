import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrl: './modal-menu.component.css'
})
export class ModalMenuComponent {
  isMenuVisible = false;

  showMenu() {
    this.isMenuVisible = true;
  }

  hideMenu() {
    this.isMenuVisible = false;
  }
}
