// Import necessary modules and dependencies for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested
import { JobsComponent } from './jobs.component';

// Describe block for testing the JobsComponent
describe('JobsComponent', () => {
  let component: JobsComponent; // Declare variable for component instance
  let fixture: ComponentFixture<JobsComponent>; // Declare variable for component fixture

  // Before each test, set up the testing environment
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsComponent] // Import the component to be tested
    })
    .compileComponents(); // Compile the component and its template
    
    // Create a fixture for the component
    fixture = TestBed.createComponent(JobsComponent);
    // Retrieve the component instance
    component = fixture.componentInstance;
    // Trigger change detection to update the component's view
    fixture.detectChanges();
  });

  // Test case: Check if the component is created successfully
  it('should create', () => {
    // Assert that the component instance is truthy, indicating it has been successfully created
    expect(component).toBeTruthy();
  });
});
