import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ModalMenuComponent } from './modal/modal-menu/modal-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, ModalMenuComponent]
})
export class SharedModule {}
