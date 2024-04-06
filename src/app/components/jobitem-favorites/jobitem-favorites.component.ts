// Import necessary Angular modules and dependencies
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../models/jobs';
import { Router, RouterModule } from '@angular/router';

// Component decorator
@Component({
  // Component selector
  selector: 'app-jobitem-favorites',
  // Indicate that this component should not be added to other modules
  standalone: true,
  // Import necessary Angular modules
  imports: [NgFor, NgIf, CommonModule, RouterModule],
  // Component template file
  templateUrl: './jobitem-favorites.component.html',
  // Component styles file
  styleUrl: './jobitem-favorites.component.css'
})
export class JobitemFavoritesComponent implements OnInit {
  // Array to hold favorite jobs
  favoriteJobsList: Jobs[] = [];

  // Constructor with injected dependencies
  constructor(private readonly router: Router) { }

  // Lifecycle hook - called after component initialization
  ngOnInit(): void {
    // Retrieve favorite jobs list from local storage and parse it into an array
    this.favoriteJobsList = JSON.parse(
      localStorage.getItem('favoriteJobsList')!
    );
  }

  // Method to navigate to job details page
  goToJobDetails(id: number): void {
    this.router.navigate(['/jobs', id]);
  }
}
