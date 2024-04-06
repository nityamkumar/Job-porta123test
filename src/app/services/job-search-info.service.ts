import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../models/jobs';
import { JobInfo } from '../models/job-info';

@Injectable()
export class JobSearchInfoService {
  constructor(private readonly http: HttpClient) {}

  // Method to fetch a list of jobs from the server
  getJobs(): Observable<Jobs[]> {
    // Send a GET request to the '/jobs' endpoint and expect a response of type Jobs[]
    return this.http.get<Jobs[]>('/jobs');
  }

  // Method to fetch details of a specific job by its ID from the server
  getJobDetails(id: string): Observable<JobInfo> {
    // Send a GET request to the '/jobs/:id' endpoint with the provided ID and expect a response of type JobInfo
    return this.http.get<JobInfo>(`/jobs/${id}`);
  }
}
