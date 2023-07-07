import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: Category[] = [];

  constructor (private categoryService: CategoryService, private router: Router) {
    if(this.categoryService.getCategories().length === 0)
    this.categoryService.setCategories();
    this.categories = this.categoryService.getCategories();
  }

  handleDeleteClick($event: number) {
    this.categoryService.deleteCategory($event);
    this.categories = this.categoryService.getCategories();
  }
  
  handleDetailClick($event: number) {
    //this.router.navigateByUrl(`categorylist/${$event}`); //categorylist/3
    this.router.navigate(['categorylist', $event]);
  }


}
