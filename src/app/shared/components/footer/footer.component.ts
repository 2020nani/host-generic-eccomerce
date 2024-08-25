import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public isMobile: boolean = false;
  constructor(){
    this.isMobile = window.innerWidth < 900;
  }
}
