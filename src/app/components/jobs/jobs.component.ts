// Import necessary Angular modules, dependencies, and models
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Jobs } from '../../models/jobs';
import { Subscription, tap } from 'rxjs';
import { JobSearchInfoService } from '../../services/job-search-info.service';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

// Component decorator
@Component({
  // Component selector
  selector: 'app-jobs',
  // Indicate that this component should not be added to other modules
  standalone: true,
  // Import necessary Angular modules
  imports: [NgFor, NgIf, CommonModule, RouterModule, HttpClientModule],
  // Provide the job search info service
  providers: [JobSearchInfoService],
  // Component template file
  templateUrl: './jobs.component.html',
  // Component styles file
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit, OnDestroy {
  // Array to hold the list of jobs
  jobsList: Jobs[] = [];
  // Array to hold the list of favorite jobs
  favoriteJobsList: Jobs[] = [];
  // Subscription to manage subscriptions
  subscriptions$: Subscription = new Subscription();

  // Constructor with injected dependencies
  constructor(
    private readonly jobSearchInfoService: JobSearchInfoService,
    private readonly router: Router
  ) { }

  // Lifecycle hook - called after component initialization
  ngOnInit(): void {
    // Retrieve jobs data
    this.getJobs();
  }

  // Method to retrieve jobs data
  getJobs(): void {
    // Subscribe to the job search service to get jobs data
    this.subscriptions$.add(
      this.jobSearchInfoService
        .getJobs()
        .pipe(
          // Tap into the data stream to process jobs and set favorite status
          tap((jobsList: Jobs[]) => {
            // Retrieve favorite jobs list from local storage
            this.favoriteJobsList = JSON.parse(
              localStorage.getItem('favoriteJobsList')!
            );
            // Map through the jobs list to set isFavorite property for each job
            this.jobsList = jobsList.map((job: Jobs) => ({
              ...job,
              isFavorite: this.setIsFavorite(job),
            }));
          })
        )
        .subscribe()
    );
  }

  // Method to check if a job is in the favorite jobs list
  setIsFavorite(job: Jobs): boolean {
    return this.favoriteJobsList?.length &&
      this.favoriteJobsList.filter((favJob: Jobs) => favJob.id === job.id)
        ?.length
      ? true
      : false;
  }

  // Method to add or remove a job from the favorite jobs list
  addToFavorite(job: Jobs): void {
    // Toggle the isFavorite property of the job
    job.isFavorite = !job.isFavorite;
    // Update the favorite jobs list
    this.favoriteJobsList = this.jobsList.filter((job: Jobs) => job.isFavorite);
    // Update the favorite jobs list in local storage
    localStorage.setItem(
      'favoriteJobsList',
      JSON.stringify(this.favoriteJobsList)
    );
  }

  // Method to navigate to the job details page
  goToJobDetails(id: number): void {
    this.router.navigate(['/jobs', id]);
  }

  // Lifecycle hook - called before component destruction
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscriptions$.unsubscribe();
  }
}
