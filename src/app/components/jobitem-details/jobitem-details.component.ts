// Import necessary Angular modules and dependencies
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobSearchInfoService } from '../../services/job-search-info.service';
import { JobInfo } from '../../models/job-info';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

// Component decorator
@Component({
  // Component selector
  selector: 'app-jobitem-details',
  // Indicate that this component should not be added to other modules
  standalone: true,
  // Import necessary Angular modules
  imports: [NgFor, NgIf, CommonModule, RouterModule, HttpClientModule],
  // Provide service dependencies for this component
  providers: [JobSearchInfoService],
  // Component template file
  templateUrl: './jobitem-details.component.html',
  // Component styles file
  styleUrl: './jobitem-details.component.css'
})

// Component class declaration
export class JobitemDetailsComponent implements OnInit, OnDestroy {
  // Declare variable to hold job details
  jobInfo!: JobInfo;
  // Declare variable to hold subscriptions
  subscriptions$: Subscription = new Subscription();

  // Constructor with injected dependencies
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly jobSearchInfoService: JobSearchInfoService
  ) { }
    
  // Lifecycle hook - called after component initialization
  ngOnInit(): void {
    // Fetch job details when component is initialized
    this.getJobDetails();
  }

  // Method to fetch job details
  getJobDetails(): void {
    // Extract job ID from route parameters
    const id = this.activatedRoute.snapshot.params['jobId'];
    // Subscribe to job details service
    this.subscriptions$.add(
      this.jobSearchInfoService
        .getJobDetails(id)
        .pipe(
          // Side effect: update jobInfo variable with fetched data
          tap((jobInfo: JobInfo) => {
            this.jobInfo = jobInfo;
          })
        )
        .subscribe()
    );
  }

  // Method to navigate to job list
  goToJobs(): void {
    this.router.navigate(['/jobs']);
  }

  // Lifecycle hook - called before component destruction
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscriptions$.unsubscribe();
  }
}
