import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public isMobile: boolean = false;
  public isStored: boolean = false;
  constructor(){
    console.log(window.location.href)
    console.log(window.location.href.includes('/store'))
    this.isMobile = window.innerWidth < 900;
    this.isStored = window.location.href.includes('/store')
  }
}
