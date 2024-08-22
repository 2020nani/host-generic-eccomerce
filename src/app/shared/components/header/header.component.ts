import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
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

  async ngOnInit() {
    alert("chamou host")
    this.filteredProducts = this.products; // Inicializa com todos os produtos
    await this.load()
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

      const ref = this.viewContainer.createComponent(m.CheckoutComponent);
      // const compInstance = ref.instance;
  }
}
