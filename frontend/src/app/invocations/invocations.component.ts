import { Component, OnInit } from '@angular/core';
import invocationsData from './invocations.json'; // Adjust path as necessary

@Component({
  selector: 'app-invocations',
  templateUrl: './invocations.component.html',
  styleUrls: ['./invocations.component.css']
})
export class InvocationsComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: string = 'Invocations du quotidien'; // Set default category
  
  ngOnInit() {
    this.categories = invocationsData;
  }
  
  getInvocations(title: string) {
    const category = this.categories.find(cat => cat.title === title);
    return category ? category.invocations : [];
  }
  
  onCategoryChange() {
    // Logic when category changes, if needed
  }
}

