import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, HostListener, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @ViewChild('cart', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  products = [
    { name: 'Product 1', category: 'Category 1' },
    { name: 'Product 2', category: 'Category 2' },
    { name: 'Product 3', category: 'Category 1' },
    // Adicione mais produtos conforme necessário
  ];

  categories = ['Category 1', 'Category 2', 'Category 3'];
  searchTerm: string = '';
  selectedCategory: string = '';
  filteredProducts: object[] = [];
  isMobile: boolean = false;

  constructor(){
    this.filteredProducts = this.products;
    this.isMobile = window.innerWidth < 900;
    this.load()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log(this.viewContainer)
    if(this.viewContainer === undefined) {
      this.load();
    }
    this.isMobile = window.innerWidth < 900;
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesName = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
      return matchesName && matchesCategory;
    });
  }

  async load(): Promise<void> {

      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component'
      });

      const ref: any= this.viewContainer.createComponent(m.CheckoutComponent);
      const compInstance = ref.instance;
  }

}
