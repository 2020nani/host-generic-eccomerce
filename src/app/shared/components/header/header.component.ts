import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
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

  ngOnInit(): void {
    this.filteredProducts = this.products; // Inicializa com todos os produtos
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesName = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
      return matchesName && matchesCategory;
    });
  }
}
