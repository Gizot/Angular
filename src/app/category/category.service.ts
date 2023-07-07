import { Injectable } from '@angular/core';
import { Category } from './category';
import { defaultcategories } from 'src/assets/defaultcategories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category []= [];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  setCategories(): void {
    this.categories = defaultcategories;
  }
  deleteCategory($event: number) {
    this.categories = this.categories.filter(category => category.categoryId !== $event );
  }
  getCategoryById(id: number): Category | undefined{ 
  return this.categories.find((category) => category.categoryId === id);
}
updateCategory(updateCategory: Category) {
  this.categories = this.categories.map(category => {
    if (category.categoryId === updateCategory.categoryId)
      category = updateCategory;
    return category;
  });
}

}
