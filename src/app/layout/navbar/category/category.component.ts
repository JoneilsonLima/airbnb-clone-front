import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from './service/category.service';
import { Category } from '../../category.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  private readonly categoryService = inject(CategoryService);

  public categories: Category[] | undefined;
  public currentActivateCategory = this.categoryService.getCategoriesByDefault();

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categories = this.categoryService.getcategories();
  }

  onChangeCategory(category: Category): void {

  }

}
