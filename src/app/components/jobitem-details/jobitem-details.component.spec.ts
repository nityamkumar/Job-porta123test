// Import necessary modules and components for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobitemDetailsComponent } from './jobitem-details.component';

// Define a test suite for the JobitemDetailsComponent
describe('JobitemDetailsComponent', () => {
  let component: JobitemDetailsComponent; // Declare a variable to hold the component instance
  let fixture: ComponentFixture<JobitemDetailsComponent>; // Declare a variable to hold the component fixture

  // Run setup before each test
  beforeEach(async () => {
    // Configure testing module with necessary imports
    await TestBed.configureTestingModule({
      imports: [JobitemDetailsComponent] // Import the component being tested
    }).compileComponents(); // Compile component and its template

    // Create a component fixture
    fixture = TestBed.createComponent(JobitemDetailsComponent);
    // Get the component instance
    component = fixture.componentInstance;
    // Trigger change detection to update the component
    fixture.detectChanges();
  });

  // Test if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component to be truthy, indicating it's successfully created
  });
});
