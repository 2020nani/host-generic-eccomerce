import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public isMobile: boolean = false;
  public isStored: boolean = false;
  public href: string = '';
  constructor(){
    this.href = window.location.href;
    this.isMobile = window.innerWidth < 900;
    this.isStored = this.href.substring(this.href.length - 5, this.href.length).includes('store');
  }

}
