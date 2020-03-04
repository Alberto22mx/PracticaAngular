import { Injectable } from '@angular/core';
import { Product } from './../../../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceslocalService {
  products: Product[] = [
    {
      id: 0,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 1,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 2,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 3,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 4,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 5,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 6,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 7,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 8,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 9,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    },
    {
      id: 10,
      image: '../../../../assets/img/',
      title: 'titulo',
      price: 2251,
      description: 'Proident cupidatat sint pariatur enim aliquip.'
    }
  ];
  constructor() { }

  getAllProducts() {
    return this.products;
  }
  getProduct(id: number) {
    return this.getAllProducts().find(item => id === item.id);
  }
}
